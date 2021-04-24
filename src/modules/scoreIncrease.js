//Добавляет значение к каунтеру

export function scoreIncrease() {
  let score = Number(document.getElementById('score').textContent);
  document.getElementById('score').textContent = score + 1;
  return score;
}
