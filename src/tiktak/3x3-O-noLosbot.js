const noLosBot3x3O = (squares, history) => {

    const botSquares = squares.slice();
    var moveMade = false;

    if(history.length === 1 ){
        playFor1stMove(botSquares);

    }else{
        playAfter2Moves(botSquares);
    }

    function playFor1stMove(botSquares){
        if(botSquares[4] != null){
            let placeOfO = Math.floor(Math.random() * 9);
            while (botSquares[placeOfO] != null) {
                placeOfO = Math.floor(Math.random() * 9);
            }
            botSquares[placeOfO] = 'O';
            moveMade = true;
            return botSquares;
        }
        if(botSquares[4] === null){
            botSquares[4] ='O';
            moveMade = true;
            return botSquares;

            // let placeOfO = Math.floor(Math.random() * 9);
            // while (botSquares[placeOfO] != null) {
            //     placeOfO = Math.floor(Math.random() * 9);
            // }
            // botSquares[placeOfO] = 'O';
            // moveMade = true;
            // return botSquares;
        }
    }

    function playAfter2Moves(botSquares) {
        const linesForBot = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ];

        for (let i = 0; i < linesForBot.length; i++) {
            const [a, b, c] = linesForBot[i];
            if (botSquares[a] && botSquares[a] === botSquares[b] ) {
                if(botSquares[c] === null){
                    botSquares[c] = 'O';
                    moveMade = true;
                    return botSquares;
                }
            }
            else if (botSquares[b] && botSquares[b] === botSquares[c] ) {
                if(botSquares[a] === null){
                    botSquares[a] = 'O';
                    moveMade = true;
                    return botSquares;
                }
            }
            else if (botSquares[a] && botSquares[a] === botSquares[c] ) {
                if(botSquares[b] === null){
                    botSquares[b] = 'O';
                    moveMade = true;
                    return botSquares;
                }
            }
            
        }

        if(!moveMade){
            // for (let j = 0; j < 9; j++) {
            //     if(botSquares[j] === null){
            //         botSquares[j] = 'O';
            //         moveMade = true;
            //         return botSquares;
            //     }
            // }

            let placeOfO = Math.floor(Math.random() * 9);
            while (botSquares[placeOfO] != null) {
                placeOfO = Math.floor(Math.random() * 9);
            }
            botSquares[placeOfO] = 'O';
            moveMade = true;
            return botSquares;

        }
        
    }

    return botSquares;
}

module.exports = noLosBot3x3O;