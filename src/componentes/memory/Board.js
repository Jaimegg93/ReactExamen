import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Board.css";

const initialCards = [
  { id: 1, value: "A", flipped: false, matched: false },
  { id: 2, value: "A", flipped: false, matched: false },
  { id: 3, value: "B", flipped: false, matched: false },
  { id: 4, value: "B", flipped: false, matched: false },
  { id: 5, value: "C", flipped: false, matched: false },
  { id: 6, value: "C", flipped: false, matched: false },
  { id: 7, value: "D", flipped: false, matched: false },
  { id: 8, value: "D", flipped: false, matched: false },
  { id: 9, value: "E", flipped: false, matched: false },
  { id: 10, value: "E", flipped: false, matched: false },
  { id: 11, value: "F", flipped: false, matched: false },
  { id: 12, value: "F", flipped: false, matched: false },
];

function Board() {
  const [cards, setCards] = useState(
    initialCards.sort(() => Math.random() - 0.5)
  );
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;

      if (first.value === second.value) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.value === first.value ? { ...card, matched: true } : card
          )
        );
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === first.id || card.id === second.id
                ? { ...card, flipped: false }
                : card
            )
          );
        }, 1000);
      }

      setFlippedCards([]);
    }
  }, [flippedCards]);

  const handleCardClick = (clickedCard) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === clickedCard.id ? { ...card, flipped: true } : card
      )
    );

    setFlippedCards((prevFlipped) => [...prevFlipped, clickedCard]);
  };

  return (
    <div className="board">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={handleCardClick} />
      ))}
    </div>
  );
}

export default Board;
