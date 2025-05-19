import { useEffect, useState } from "react";
import context from "./context/context";
import Board from "./Game/board";
import Info from "./Game/info";
import Result from "./Game/result";

function App() {
  const [xIsNext, setxIsNext] = useState(true);
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [xWins , setxWins] = useState(0)
  const [oWins , setoWins] = useState(0)
  const [draw , setdraw] = useState(0)

  useEffect(() => {
    let random = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    if (random == 1) {
      setxIsNext(false);
    }
  }, []);

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      handlecheck(winner)
    } else {
      status = "Player: " + (xIsNext ? "X" : "O");
    }

  function calculateWinner(squares) {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    let x = 0;
    for(let i = 0 ; i < 9 ; i++){
      if (squares[i]) {
        x++
      }
    }
    if(x == 9){
      return "draw"
    }
    return null;
  }

  function handlecheck(winner){
    if(winner == "X"){
      setxWins(xWins + 1)
    }else if(winner == "O"){
      setoWins(oWins + 1)
    }else if(winner == "draw"){
      setdraw(draw + 1)
    }
    setsquares(Array(9).fill(null))
  }

  return (
    <>
      <context.Provider
        value={{
          xIsNext: xIsNext,
          squares: squares,
          setsquares : setsquares,
          status : status , 
          xWins : xWins,
          setoWins : setoWins,
          oWins : oWins,
          setxWins : setxWins,
          draw : draw,
          setdraw : setdraw
        }}
      >
        <div className="container">
          <Info />
          <div className="game-main">
            <p className="tic-tac-toe">Tic Tac Toe</p>
            <Board
              squares={squares}
              setsquares={setsquares}
              calculateWinner={calculateWinner}
              xIsNext={xIsNext}
              setxIsNext={setxIsNext}
            />
          </div>
          <Result />
        </div>
      </context.Provider>
    </>
  );
}

export default App;
