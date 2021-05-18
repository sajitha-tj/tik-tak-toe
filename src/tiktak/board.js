function Square(props) {
    return ( 
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
     );
}

function renderSquare(i, props) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
}

function statusUpdate(props){
    let status = "New Game";
    if(props.winner){
        if (props.winner === 'Draw') {
            status = "Draw! Well played";
        }
        else{
            status = "Winner is : " + props.winner;
        }
    }
    else{
        status = "Next Player : "
        status+= props.xIsNext ? 'X' : 'O';
    }
    
    return(
        <p>{status}</p>
    )
}
 
const Board = (props) => {
    return ( 
        <div className="game-board">
            
            <div className="one-row">
                { renderSquare(0, props) }
                { renderSquare(1, props) }
                { renderSquare(2, props) }
            </div>
            <div className="one-row">
                { renderSquare(3, props) }
                { renderSquare(4, props) }
                { renderSquare(5, props) }
            </div>
            <div className="one-row">
                { renderSquare(6, props) }
                { renderSquare(7, props) }
                { renderSquare(8, props) }
            </div>

            <div className="next-player">
                {statusUpdate(props)}
                {/* <p>Next Player : {props.xIsNext ? 'X' : 'O'}</p> */}
            </div>
        </div>
     );
}
 
export default Board;