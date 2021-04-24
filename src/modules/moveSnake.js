import { scoreIncrease } from "./scoreIncrease";
import { speed } from "../index";
import { createFood, foodX, foodY } from "./food";
import { snake } from "./snake";


//Описан принцип движения змейки
export function moveSnake() {
  const head = {
    x: snake[0].x + speed.dx,
    y: snake[0].y + speed.dy,
  };
  snake.unshift(head);
  if (snake[0].x == foodX && snake[0].y == foodY) {
    createFood();
    scoreIncrease();
  }
  else
    snake.pop();
};


