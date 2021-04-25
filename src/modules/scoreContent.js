//Добавляет значение к каунтеру

export function scoreContent() {
  let score = Number(document.getElementById('score_Value').textContent);
  document.getElementById('score_Value').textContent = score + 1;
  return score;
}
