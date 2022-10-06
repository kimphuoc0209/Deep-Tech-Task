import React from "react";
import { useAppSelector } from "../../app/hooks";
import { getAllCards } from "../../featured/cardsSlice";
import "./panelUserStyles.scss";

const PanelUser: React.FC = () => {
  const getCards = useAppSelector(getAllCards);

  const cardList = getCards.cards.map((card) => {
    if (
      card.value === "QUEEN" ||
      card.value === "KING" ||
      card.value === "JACK"
    ) {
      return {
        ...card,
        value: "10",
      };
    } else if (card.value === "ACE") {
      return {
        ...card,
        value: "1",
      };
    }
    return card;
  });

  const totalPoint = () => {
    const totalValue =
      Number(cardList[0]?.value) +
      Number(cardList[1]?.value) +
      Number(cardList[2]?.value);
    const value = (totalValue % 100) % 10;

    return value;
  };

  return (
    <div className="panel">
      <div className="panel__img-card">
        <img src={`${cardList[0]?.image}`} className="img-left" alt="" />
        <img src={`${cardList[1]?.image}`} className="img-center" alt="" />
        <img src={`${cardList[2]?.image}`} className="img-right" alt="" />
      </div>
      <h1 className="panel__userName">Minh Tài</h1>
      <h1 className="panel__point">
        Point: <strong>5000</strong>
      </h1>
      <p className="panel__point-cards">
        Point of 3 Cards:{" "}
        {getCards.cards.length > 1 ? (
          <strong>{totalPoint()}</strong>
        ) : (
          "loading..."
        )}
      </p>
    </div>
  );
};

export default PanelUser;
