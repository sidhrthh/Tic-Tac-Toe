import React, { useState } from "react";
import Box from "./box";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index:number) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <>
          {isWinner} won the game{" "}
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <h4>Player {isXTurn ? "X" : "O"} please move</h4>
          <div className="row">
            <Box onClick={() => handleClick(0)} value={state[0]} />
            <Box onClick={() => handleClick(1)} value={state[1]} />
            <Box onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="row">
            <Box onClick={() => handleClick(3)} value={state[3]} />
            <Box onClick={() => handleClick(4)} value={state[4]} />
            <Box onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="row">
            <Box onClick={() => handleClick(6)} value={state[6]} />
            <Box onClick={() => handleClick(7)} value={state[7]} />
            <Box onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
