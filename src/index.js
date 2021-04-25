import { drawSnake, snakePart } from "./modules/snake";
import { moveSnake } from "./modules/moveSnake";
import { createFood } from "./modules/food";
import { main, changeDirection } from "./modules/game";
import "./style.css"; 



export const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

export function clearCanvas () {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  // ctx.strokeStyle = 'black';
  // ctx.strokeRect(0, 0, canvas.width, canvas.height)
}

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;



export const GAME_SETTINGS = {
  size: 10, 
  speed: 0
};
 
//Горизонтальная и вертикальная скорость
export const offset_step = {
  x: GAME_SETTINGS.size,
  y: GAME_SETTINGS.size
}


document.addEventListener("keydown", changeDirection);
document.addEventListener("click", changeDirection);

offset_step.x = 0;
offset_step.y = -GAME_SETTINGS.size;
moveSnake();
drawSnake();

//нарисовали еду


main();
createFood()
