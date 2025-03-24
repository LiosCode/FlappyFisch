import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
  gameStarted: false,
  isGameOver: false,
  birdPosition: 300,
  pipePosition: 500
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addScore: (state) => {
      state.score += 1;
    },
    startGame: (state) => {
      state.gameStarted = true;
      state.isGameOver = false;
      state.score = 0;
      state.birdPosition = 300;
      state.pipePosition = 500;
    },
    gameOver: (state) => {
      state.gameStarted = false;
      state.isGameOver = true;
    },
    setBirdPosition: (state, action) => {
      state.birdPosition = action.payload;
    },
    setPipePosition: (state, action) => {
      state.pipePosition = action.payload;
    },
    resetGame: (state) => {
      Object.assign(state, initialState);
    }
  }
});

export const { addScore, startGame, setBirdPosition, gameOver, resetGame, setPipePosition } = gameSlice.actions;
export default gameSlice.reducer;

