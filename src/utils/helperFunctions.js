import { GRID_SIZE } from '../config/gameSettings';

export const numToCoord = (num) => {
  // X Coordinate
  let xCoord = Math.floor(num / GRID_SIZE);
  // console.log({ xCoord });

  // Y Coordinate
  let yCoord = num % GRID_SIZE;
  // console.log({ yCoord });

  // Coordinates
  let coordinates = [yCoord, xCoord];
  // console.log(coordinates);
  return coordinates;
};

export const coordToNum = (coord) => {
  if (!coord) return;

  let [xCoord, yCoord] = coord;
  let total = yCoord * GRID_SIZE + xCoord;

  return total;
};
