import Board from "./board";
import { useState } from 'react';
const noLosBot3x3O = require('./3x3-O-noLosbot');


const Game = () => {

    const[history,setHistory] = useState([
        {squares: Array(9).fill(null)}
    ]);

    const [xIsNext, setxIsNext] = useState(true);

    const handleClick = (i) => {
        const newHistory = history.slice();
        const current = newHistory[newHistory.length-1];
        const squares = current.squares.slice();

        const winner = calculateWinner(squares);

        if(winner){
            alert(`${winner} has won the Game`);
            return;
        }
        if(squares[i] != null){
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';

        setHistory(
            newHistory.concat([
                {squares: squares}
            ])
        );

        setxIsNext(!xIsNext);


        setTimeout(() => {
            autoPlayBot(squares);
        }, 500);
    }

    function autoPlayBot(squares){
        const winner = calculateWinner(squares);
        if(winner){
            if(winner === 'Draw'){
                alert('match Drawed');
                return;
            }
            alert(`${winner} has won the Game`);
            return;
        }

        const botSquares = noLosBot3x3O(squares, history);


        const newHistory = history.slice();

        setHistory(
            newHistory.concat([
                {squares: botSquares}
            ])
        );

        setxIsNext(true);
        
    }

    const undoBtn = () => {
        const newHistory = history.slice(0, -1);
        setHistory(newHistory);
        // setxIsNext(!xIsNext);
    }

    const newGameBtn = () => {
        setHistory([
            {squares: Array(9).fill(null)}
        ]);
        setxIsNext(true);
    }

    function calculateWinner(squares) {

        if(history.length == 1 ){
            return null;
        }

        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        
        var isEnded = true;
        squares.forEach(square => {
            if(square === null){
                isEnded = false;
            }
        });

        if(isEnded){
            return 'Draw';
        }

        return null;
    }

    return ( 
        <div className="game">
            <Board squares={history[history.length-1].squares} xIsNext={xIsNext} winner={calculateWinner(history[history.length-1].squares)} onClick={handleClick}/>

            <div className="controller-btns">
                {history.length === 1 ? null : <button onClick={undoBtn}>undo</button>}
                {calculateWinner(history[history.length-1].squares) ?  <button onClick={newGameBtn}>New Game</button> : null}
            </div>
        </div>
     );
}
 
export default Game;