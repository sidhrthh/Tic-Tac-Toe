import React from 'react';
import Box from './box';
import { useState } from 'react';

const Component: React.FC = () => {
    const [state, setState] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState("")

    const checkWinner = (state : any[]) => {
        const win = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i = 0 ; i < win.length ; i++) {
            const [ a , b,c] = win[i];
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]) return true;
        }
        return false;
    }

    const clickPlayer = (index: number) => {
        const stateCopy = Array.from(state);

        if(stateCopy[index] !== null) return ;
        stateCopy[index] = currentPlayer;

        // Set Someone Wins
        const win = checkWinner(stateCopy);
        if(win) {
            alert(`${currentPlayer} is Win!`)
        }

        setCurrentPlayer(currentPlayer === 'X' ? "O" : "X")
        setState(stateCopy)
    }

    return (
        <div>
            <h1>Enjoy Your ~ Tic Tao Toe Game!</h1>
            <div className="board-container">
                <div className="row">
                    <Box onClick={() => clickPlayer(0)} value={state[0]} />
                    <Box onClick={() => clickPlayer(1)} value={state[1]} />
                    <Box onClick={() => clickPlayer(2)} value={state[2]} />
                </div>
                <div className="row">
                    <Box onClick={() => clickPlayer(3)} value={state[3]} />
                    <Box onClick={() => clickPlayer(4)} value={state[4]} />
                    <Box onClick={() => clickPlayer(5)} value={state[5]} />
                </div>
                <div className="row">
                    <Box onClick={() => clickPlayer(6)} value={state[6]} />
                    <Box onClick={() => clickPlayer(7)} value={state[7]} />
                    <Box onClick={() => clickPlayer(8)} value={state[8]} />
                </div>
            </div>
        </div>
    );
};

export default Component;
