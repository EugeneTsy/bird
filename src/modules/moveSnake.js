import { scoreContent } from "./scoreContent";
import { offset_step } from "../index";
import { createFood, foodX, foodY } from "./food";
import { snake } from "./snake";


//Описан принцип движения змейки
export function moveSnake() {
  const head = {
    x: snake[0].x + offset_step.x,
    y: snake[0].y + offset_step.y,
  };
  snake.unshift(head);
  if (snake[0].x == foodX && snake[0].y == foodY) {
    createFood();
    scoreContent();
  }
  else
    snake.pop()
    // setTimeout(snake.pop(), 10) 
};


