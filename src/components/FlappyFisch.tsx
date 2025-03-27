"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../lib/store";
import { addScore, startGame, setBirdPosition, gameOver, resetGame } from "../lib/slice";

export default function FlappyFisch() {
  const dispatch = useDispatch();
  const { score, gameStarted, isGameOver, birdPosition } = useSelector((state: RootState) => state.game);
  const windowHeight = 400; // Höhe des Spielfeldes

  const handleJump = () => {
    if (!gameStarted) return;
    dispatch(setBirdPosition(birdPosition - 70)); // Vogel springt nach oben
  };

  useEffect(() => {
    let fallInterval: NodeJS.Timeout;

    if (gameStarted && !isGameOver) {
      fallInterval = setInterval(() => {
        dispatch(setBirdPosition(birdPosition + 6)); // Vogel fällt nach unten

        // Überprüfen, ob der Vogel den unteren Rand des Spielfeldes erreicht hat
        if (birdPosition >= windowHeight + 215 ) { // 30 ist die Höhe des Vogels
          dispatch(gameOver()); // Spiel beenden
        }
      }, 30); // alle 30 ms

      return () => clearInterval(fallInterval); // Aufräumen des Intervalls
    }
  }, [gameStarted, isGameOver, birdPosition, dispatch]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Flappy Fisch</h1>
      <p>Punktestand: {score}</p>

      {!gameStarted && <button onClick={() => dispatch(startGame())}>Spiel starten</button>}
      {gameStarted && <button onClick={handleJump}>Springen</button>}
      {isGameOver && (
        <div>
          <h2>Game Over</h2>
          <button onClick={() => dispatch(resetGame())}>Neustarten</button>
        </div>
      )}

      <div
        style={{
          position: "relative",
          width: "600px",
          height: "650px",
          border: "2px solid black",
          margin: "20px auto",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            backgroundColor: "yellow",
            borderRadius: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            top: `${birdPosition}px`,
          }}
        ></div>
      </div>
    </div>
  );
}