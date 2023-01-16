export const GRID_SIZE = 20;
export const CELL_SIZE = 20;

export const ALLOWED_KEYS = [32, 37, 38, 39, 40, 67];

export const MOVE = [
  { direction: 'up', code: 38, count: -20 },
  { direction: 'down', code: 40, count: 20 },
  { direction: 'left', code: 37, count: -1 },
  { direction: 'right', code: 39, count: 1 },
];

export const ACTIONS = {
  spacebar: 32,
  c: 67,
};

export const GAME_SETTING = {
  fps: 60,
  lives: 3,
  pills: 4,
  pacSpeed: 100,
  enemySpeed: 50,
  pacStart: [1, 1],
};

export const RESPAWN = {
  level1: {
    pacman: { nextObj: 'blank', currentIndex: 21, nextIndex: 22 },
    blinky: { nextObj: 'blank', currentIndex: 249, nextIndex: 229 }, //188
    pinky: { nextObj: 'blank', currentIndex: 191, nextIndex: 171 },
    inky: { nextObj: 'blank', currentIndex: 251, nextIndex: 231 },
    clyde: { nextObj: 'blank', currentIndex: 248, nextIndex: 228 },
  },
};

export const OBJECT_TYPE = {
  BLANK: 'blank',
  WALL: 'wall',
  DOT: 'dot',
  BLINKY: 'blinky',
  PINKY: 'pinky',
  INKY: 'inky',
  CLYDE: 'clyde',
  PILL: 'pill',
  PACMAN: 'pacman',
  GHOST: 'ghost',
  SCARED: 'scared',
  GHOSTLAIR: 'lair',
};

export const GHOSTS = ['blinky', 'pinky', 'inky', 'clyde'];

export const LAIR_SPOT = [
  [8, 9],
  [11, 9],
  [8, 12],
  [11, 12],
];

// Lookup array for classes
export const OBJECT = [
  OBJECT_TYPE.BLANK, // 0
  OBJECT_TYPE.WALL, // 1
  OBJECT_TYPE.DOT, // 2
  OBJECT_TYPE.BLINKY, // 3
  OBJECT_TYPE.PINKY, // 4
  OBJECT_TYPE.INKY, // 5
  OBJECT_TYPE.CLYDE, // 6
  OBJECT_TYPE.PILL, // 7
  OBJECT_TYPE.PACMAN, // 8
  OBJECT_TYPE.GHOSTLAIR, // 9
];

export const ENEMY_STATUS = [
  { mode: 'scatter' },
  { mode: 'frightened' },
  { mode: 'chasing' },
  { mode: 'dead' },
];

export const COOL_DOWN = { frightened: 10000, dead: 10000 };

// prettier-ignore
export const LEVEL1 = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,
  1, 7, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 7, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,
  1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
  1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,
  0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0,
  0, 0, 0, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 0, 0, 0,
  1, 1, 1, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 1, 1, 1, 
  1, 7, 2, 2, 2, 2, 2, 1, 9, 9, 9, 9, 1, 2, 2, 2, 2, 2, 7, 1, 
  1, 1, 1, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 1, 1, 1, 
  0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0,
  0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0,
  1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,
  1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
  1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 7, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 7, 1,
  1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

// SCRATCH WORK

// Temporary Start: Grid will be [1,1]
// Function to convert Grid spot to list spot?

/**
 * Bounds
 * TOP LEFT: [0,0] or 0
 * TOP RIGHT: [19,0] or 19
 * BOTTOM LEFT: [0,22] or ? 439
 * BOTTOM RIGHT: [19,22] or 459
 */

// BASE ZERO EVERYTHING
// 20 across 23 down
/**
 * [0,0] = 0
 * [0,1] = 1
 * [0,2] = 2
 * [0,19] = 19
 *
 *
 *
 */
// LEFT
// Move left is -1
// Init: [3,1] // 23
// Next: [2,1] // 22

// RIGHT
// Move right is +1
// Init: [1,1] // 21
// Next: [2,1] // 22

// UP
// Move up is -20
// Init: [1,3] // 61
// Next: [1,2] // 41

// DOWN
// Move down is +20
// Init: [1,3] // 61
// Next: [1,4] // 81
