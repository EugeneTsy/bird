import { ctx, GAME_SETTINGS } from "../index";



export let snakePart = [];

export let snake = [
  {x: 150, y: 150},
  {x: 140, y: 150},
  {x: 130, y: 150},
  {x: 120, y: 150},
  {x: 110, y: 150},
]


//Рисует змею на холсте
export function drawSnake() {
  snake.forEach(drawSnakePart);
}

//Описано, как выглядит часть (один квадратик) змейки
function drawSnakePart(snakePart) {
  ctx.fillStyle = 'black';
  // ctx.strokeStyle = 'white';

  //Draw the snake
  ctx.fillRect(snakePart.x, snakePart.y, GAME_SETTINGS.size, GAME_SETTINGS.size);
  // ctx.strokeRect(snakePart.x, snakePart.y, GAME_SETTINGS.size, GAME_SETTINGS.size);
}

