import { useState } from "react";
import Square from "./square";

function Board({squares , setsquares , calculateWinner , xIsNext , setxIsNext}) {

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    let updateSquares = squares.slice();
    updateSquares[i] = xIsNext ? "X" : "O";
    setsquares(updateSquares);
    setxIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board">
        <table className="board-table">
            <tbody>
          <tr className="board-row">
            <td>
              <Square
                value={squares[0]}
                handleSquareClick={() => handleClick(0)}
              />
            </td>
            <td>
              <Square
                value={squares[1]}
                handleSquareClick={() => handleClick(1)}
              />
            </td>
            <td>
              <Square
                value={squares[2]}
                handleSquareClick={() => handleClick(2)}
              />
            </td>
          </tr>
          <tr className="board-row">
            <td>
              <Square
                value={squares[3]}
                handleSquareClick={() => handleClick(3)}
              />
            </td>
            <td>
              {" "}
              <Square
                value={squares[4]}
                handleSquareClick={() => handleClick(4)}
              />
            </td>
            <td>
              <Square
                value={squares[5]}
                handleSquareClick={() => handleClick(5)}
              />
            </td>
          </tr>
          <tr className="board-row">
            <td>
              <Square
                value={squares[6]}
                handleSquareClick={() => handleClick(6)}
              />
            </td>
            <td>
              <Square
                value={squares[7]}
                handleSquareClick={() => handleClick(7)}
              />
            </td>
            <td>
              <Square
                value={squares[8]}
                handleSquareClick={() => handleClick(8)}
              />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Board;
