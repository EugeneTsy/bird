import { canvas, ctx, STEP } from "../index.js";
import { snake } from "./snake";

//создаем тут еду

export let foodX;
export let foodY;

export function randomNumber(min, max) {
  return Math.round((Math.random() * (max-min) + min) / STEP) * STEP;
}


export function createFood() {
  foodX = randomNumber(0, canvas.width - 10);
  foodY = randomNumber(0, canvas.height - 10);

  let i = 1;
  snake.forEach(
    function isFoodOnSnake(snakePart) {
      const foodIsOnSnake = snakePart.x === foodX && snakePart.y === foodY; //проверяем, чтобы еда не была на змее
      
      if (foodIsOnSnake) {
        createFood();
      }
    });
}
//Рисуем еду в рандомном месте

export function drawFood() {
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'darkred';
  ctx.fillRect(foodX, foodY, STEP, STEP);
  ctx.strokeRect(foodX, foodY, STEP, STEP);
}

