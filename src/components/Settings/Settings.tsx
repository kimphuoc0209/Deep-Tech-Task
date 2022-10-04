import React from "react";
import "./setttingStyles.scss";

const Settings: React.FC = () => {
  return (
    <div className="settings">
      <span className="settings__deck">Deck Cards: 40</span>
      <div className="settings__btn-list">
        <button className="btn__item">Shuffle</button>
        <button className="btn__item">Draw</button>
        <button className="btn__item">Reveal</button>
        <button className="btn__item">Reset</button>
      </div>
    </div>
  );
};

export default Settings;
