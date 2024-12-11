import Square from "./Square";
import "./Board.css";
import { useState } from "react";

export default function Board() {
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const solution = "CLASE";
  const guesses = ["     ", "     ", "     ", "     ", "     "];
  const [messageWinner, setMessageWinner] = useState("");

  const handleSquareChange = (parameters: {
    row: number;
    column: number;
    letter: any;
  }) => {
    guesses[parameters.row - 1] = replaceAt(
      guesses[parameters.row - 1],
      parameters.column - 1,
      parameters.letter
    );
    let isAttempComplete = true;
    for (let i = 0; i < 5; i++) {
      if (guesses[parameters.row - 1].charAt(i) == " ") {
        isAttempComplete = false;
        break;
      }
    }
    if (isAttempComplete) {
      if (guesses[parameters.row - 1] == solution) {
        setMessageWinner("CONGRATULATIONS");
        setCurrentAttempt(10);
      } else {
        if (currentAttempt < 5) {
          setCurrentAttempt(currentAttempt + 1);
        } else {
          setMessageWinner("Game Over");
          setCurrentAttempt(10);
        }
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Wordle</p>
      </header>
      <div className="Board">
        <div id="row" className="Row">
          <Square
            row="1"
            column="1"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="1"
            column="2"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="1"
            column="3"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="1"
            column="4"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="1"
            column="5"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
        </div>
        <div id="row" className="Row">
          <Square
            row="2"
            column="1"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="2"
            column="2"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="2"
            column="3"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="2"
            column="4"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="2"
            column="5"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
        </div>
        <div id="row" className="Row">
          <Square
            row="3"
            column="1"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="3"
            column="2"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="3"
            column="3"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="3"
            column="4"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="3"
            column="5"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
        </div>
        <div id="row" className="Row">
          <Square
            row="4"
            column="1"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="4"
            column="2"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="4"
            column="3"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="4"
            column="4"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="4"
            column="5"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
        </div>
        <div id="row" className="Row">
          <Square
            row="5"
            column="1"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="5"
            column="2"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="5"
            column="3"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="5"
            column="4"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
          <Square
            row="5"
            column="5"
            attempt={currentAttempt}
            textUpdate={(e: any) => handleSquareChange(e)}
          ></Square>
        </div>
      </div>
    </div>
  );
}
function replaceAt(arg0: string, arg1: number, letter: any): string {
  throw new Error("Function not implemented.");
}
