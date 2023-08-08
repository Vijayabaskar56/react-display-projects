import { useEffect, useState } from "react";
import "./App.css";
import { Icon } from "./Components/Icon";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [gameWinner, setgameWinner] = useState("");
  const [isCross, setisCross] = useState(false);
  const [gameState, setgameState] = useState(new Array(9).fill("empty", 0, 9));
  const handleClick = (itemNumber) => {
    if (gameWinner) {
      return toast.success(gameWinner);
    }

    if (gameState[itemNumber] === "empty") {
      const updateGameState = [...gameState];
      updateGameState[itemNumber] = isCross ? "cross" : "circle";
      setgameState(updateGameState);
      setisCross(!isCross);
    } else {
      return toast.error("the Field is already checked");
    }
  };
  useEffect(() => {
    const checkWinner = () => {
      const winnerCombination = [
        //Rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //coloum
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //cross
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (const combination of winnerCombination) {
        const [a, b, c] = combination;
        if (
          gameState[a] !== "empty" &&
          gameState[a] === gameState[b] &&
          gameState[b] === gameState[c]
        ) {
          return setgameWinner(`${gameState[a]} won the game 🥳`);
        }

        if (gameState.every((item) => item !== "empty") && !gameWinner) {
          setgameWinner(`Match is Draw.. `);
        }
      }
    };

    checkWinner();
  }, [gameState]);

  //game reloaded logic

  const reloadGame = () => {
    setgameWinner("");
    setisCross(false);
    setgameState(new Array(9).fill("empty", 0, 9));
  };

  return (
    <>
      <button type="button">
        {gameWinner ? (
          <p>{gameWinner}</p>
        ) : (
          <p>Player's {isCross ? "X" : "O"} Turn </p>
        )}
      </button>
      {/* game Grid */}
      <div className="gameCointainer">
        {gameState.map((item, index) => {
          return (
            <div
              className="gameState"
              onClick={() => handleClick(index)}>
              <Icon
                name={item}
                key={index}
              />
            </div>
          );
        })}
      </div>
      <button
        type="button"
        onClick={reloadGame}>
        {gameWinner ? "Start new game" : "ReLoad the game"}
      </button>
    </>
  );
}

export default App;
