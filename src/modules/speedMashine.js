import { GAME_SETTINGS } from "../index";

export function speedMashine(value = 0) {
  GAME_SETTINGS.speed = (10 - value) * 10;
  return GAME_SETTINGS.speed;
}
