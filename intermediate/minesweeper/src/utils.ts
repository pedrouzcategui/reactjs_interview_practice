const MINE = 1;
const EMPTY = 0;

export const generateMinesGrid = (length: number) => {
  if (length <= 0) {
    throw new Error("Grid size must be positive");
  }

  const GRID = []; // Use a mutable array
  for (let i = 0; i < length; i++) {
    GRID.push(new Array(length).fill(0)); // Create independent rows
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      GRID[i][j] = Math.random() < 0.1 ? MINE : EMPTY; // Use meaningful constants
    }
  }

  return GRID;
};
