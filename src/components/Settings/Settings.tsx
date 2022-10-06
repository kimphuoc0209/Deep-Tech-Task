import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchCardsAsync,
  getAllCards,
  getRemaining,
} from "../../featured/cardsSlice";
import "./setttingStyles.scss";

const Settings: React.FC = () => {
  const [isDrawn, setIsDrawn] = useState(false);
  const [user, setUser] = useState(4);
  const [remaining, setRemaining] = useState(useAppSelector(getRemaining));
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

  const dispatch = useAppDispatch();
  const onShuffle = () => {
    setRemaining(52);
    setIsDrawn(false);
    dispatch(fetchCardsAsync());
  };

  const onDrawn = () => {
    setIsDrawn(true);
  };
  const onReset = () => {
    setRemaining(52);
    setIsDrawn(false);
    dispatch(fetchCardsAsync());
  };

  const onReveal = () => {
    alert(`Total Your Poins ${totalPoint()}`);
  };

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isDrawn) {
      timer = setTimeout(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    }

    if (remaining === 51 - user * 3) {
      setRemaining(52);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isDrawn, remaining]);

  return (
    <div className="settings">
      {getCards && getCards.cards.length > 1 ? (
        <span className="settings__deck">Deck Cards: {remaining}</span>
      ) : (
        <span className="settings__deck">loadding...</span>
      )}
      <div className="settings__btn-list">
        <button className="btn__item" onClick={onShuffle}>
          Shuffle
        </button>
        <button className="btn__item" onClick={onDrawn}>
          Drawn
        </button>
        <button className="btn__item" onClick={onReveal}>
          Reveal
        </button>
        <button className="btn__item" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Settings;
