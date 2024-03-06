import React, { useState } from 'react'
import Card from '../Card/Card';
import './Grid.css'
import isWinner from '../Helpers/checkWinner';

const Grid = ({ numberOfCards }) => {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null)

    const play = (index) => {
        if (turn == true) {
            board[index] == "O"
        } else {
            board[index] == "X"
        }

        const win = isWinner(board, turn ? "O" : "X");
        if (win) {
            setWinner(win)
        }

        setBoard([...board]);
        setTurn(!turn);
    }
    return (

        <div className='grid-container'>
            {
                winner && (
                    <>
                        <h1 className='turn-highlight'>Winner is ${winner}</h1>
                    </>
                )
            }

            <h1 className='turn-highlight'>Current Turn:{(true) ? "O" : "X"}</h1>

            <div className='grid'>
                {board.map((val, index) => <Card key={index} onPlay={play} player={val} index={index} />)}
            </div>
        </div>

    )
}

export default Grid
