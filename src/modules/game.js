import { clearCanvas, canvas, STEP, SPEED_VALUE, speed} from "../index";
import { drawFood, createFood } from "./food";
import { moveSnake } from "./moveSnake";
import { snake, drawSnake } from "./snake";

let changingDirection = false;

export function changeDirection(event) {
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  if (changingDirection) return;
  changingDirection = true;

  const keyPressed = event.keyCode;

  const goingUp = speed.dy === -STEP;
  const goingDown = speed.dy === STEP;
  const goingRight = speed.dx === STEP;
  const goingLeft = speed.dx === -STEP;  

  //Условия, чтобы змея не двигалась против себя самой
  if (keyPressed === LEFT_KEY && !goingRight) {
    speed.dx = -STEP;
    speed.dy = 0;
  } else if (keyPressed === RIGHT_KEY && !goingLeft) {
    speed.dx = STEP;
    speed.dy = 0;
  } else if (keyPressed === UP_KEY && !goingDown) {
    speed.dx = 0;
    speed.dy = -STEP;
  } else if (keyPressed === DOWN_KEY && !goingUp) {
    speed.dx = 0;
    speed.dy = STEP;
  }
}

export function didGameEnd() {
  for (let i = 4; i < snake.length; i++) {
    const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y;

    if (didCollide) {
      return true;
    }
  }

  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > canvas.width - STEP;
  const hitUPWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > canvas.height - STEP;;

  return hitLeftWall || hitRightWall || hitUPWall || hitBottomWall;
}


export function main () {

  if (didGameEnd()) return;

  changingDirection = false;
  setTimeout(
    function onTick() {
      clearCanvas();
      moveSnake();
      drawFood();
      drawSnake();
      setTimeout(main, 0);
    }, SPEED_VALUE)
}