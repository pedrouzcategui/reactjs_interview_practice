const MINE = "BOMB";
const EMPTY = 0;

//Directions are ordered as Y,X pairs.
const DIRECTIONS: number[][] = [
  [-1, 0], // up
  [1, 0], // down
  [0, 1], // right
  [0, -1], // left
  [-1, 1], // up-right
  [-1, -1], // up-left
  [1, 1], // down-right
  [1, -1], // down-left
];

export const generateMinesGrid = (length: number) => {
  if (length <= 0) {
    throw new Error("Grid size must be positive");
  }

  let GRID = [];
  for (let i = 0; i < length; i++) {
    GRID.push(new Array(length).fill(0));
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      GRID[i][j] = Math.random() < 0.1 ? MINE : EMPTY;
    }
  }

  for (let rowIndex = 0; rowIndex < length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < length; columnIndex++) {
      let bombCount: number = 0;
      for (let direction of DIRECTIONS) {
        if (
          GRID[rowIndex + direction[0]]?.[columnIndex + direction[1]] === MINE
        ) {
          bombCount++;
          GRID[rowIndex][columnIndex] = bombCount;
        }
      }
    }
  }
  return GRID;
};
