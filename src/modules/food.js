import { canvas, ctx, GAME_SETTINGS } from "../index.js";
import { snake } from "./snake";

//создаем тут еду

export let foodX;
export let foodY;

export function randomNumber(min, max) {
  return Math.round((Math.random() * (max-min) + min) / 10) * GAME_SETTINGS.size;
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
  ctx.fillStyle = 'black';
  // ctx.strokeStyle = 'darkred';
  ctx.fillRect(foodX, foodY, GAME_SETTINGS.size, GAME_SETTINGS.size);
  // ctx.strokeRect(foodX, foodY, GAME_SETTINGS.size, GAME_SETTINGS.size);
}

