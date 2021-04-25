import { clearCanvas, canvas, GAME_SETTINGS, offset_step} from "../index";
import { drawFood, createFood } from "./food";
import { moveSnake } from "./moveSnake";
import { snake, drawSnake } from "./snake";
import { speedMashine } from "./speedMashine";





  


  
  
  let changingDirection = false;
  
  export function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const TOP_BTN = document.getElementById('top');
    const RIGHT_BTN = document.getElementById('right');
    const BOTTOM_BTN = document.getElementById('bottom');
    const LEFT_BTN = document.getElementById('left');
    
  if (changingDirection) return;
  changingDirection = true;
  const keyPressed = event.keyCode;

  const goingUp = offset_step.y === -GAME_SETTINGS.size;
  const goingDown = offset_step.y === GAME_SETTINGS.size;
  const goingRight = offset_step.x === GAME_SETTINGS.size;
  const goingLeft = offset_step.x === -GAME_SETTINGS.size;  

  //Условия, чтобы змея не двигалась против себя самой
  if (keyPressed === LEFT_KEY || event.target === LEFT_BTN && !goingRight) {
    offset_step.x = -GAME_SETTINGS.size;
    offset_step.y = 0;
  } else if (keyPressed === RIGHT_KEY || event.target === RIGHT_BTN && !goingLeft) {
    offset_step.x = GAME_SETTINGS.size;
    offset_step.y = 0;
  } else if (keyPressed === UP_KEY || event.target === TOP_BTN && !goingDown) {
    offset_step.x = 0;
    offset_step.y = -GAME_SETTINGS.size;
  } else if (keyPressed === DOWN_KEY || event.target === BOTTOM_BTN && !goingUp) {
    offset_step.x = 0;
    offset_step.y = GAME_SETTINGS.size;
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
  const hitRightWall = snake[0].x > canvas.width - GAME_SETTINGS.size;
  const hitUPWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > canvas.height - GAME_SETTINGS.size;;

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
      main()
    }, speedMashine(1))
}