import { drawSnake, snakePart } from "./modules/snake";
import { moveSnake } from "./modules/moveSnake";
import { createFood } from "./modules/food";
import { didGameEnd, main, changeDirection } from "./modules/game";
import "./style.css"; 



export const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

export function clearCanvas () {
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';

  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.strokeRect(0, 0, canvas.width, canvas.height)
}

export const STEP = 10;
export const SPEED_VALUE = 100;

//Горизонтальная и вертикальная скорость
export const speed = {
  dx: STEP,
  dy: STEP
}


document.addEventListener("keydown", changeDirection)
//Нарисовали дефолтную змеюку

speed.dx = 0;
speed.dy = -STEP;
moveSnake();
drawSnake();

//нарисовали еду


main();
createFood()
