import React from "react";
import "./panelUserStyles.scss";

const PanelUser: React.FC = () => {
  return (
    <div className="panel">
      <div className="panel__img-card">
        <img src="/assets/images/1-ro.jpg" className="img-left" alt="" />
        <img src="/assets/images/1.png" className="img-center" alt="" />
        <img src="/assets/images/3.png" className="img-right" alt="" />
      </div>
      <h1 className="panel__userName">Minh Tài</h1>
      <h1 className="panel__point">
        Point: <strong>5000</strong>
      </h1>
      <p className="panel__point-cards">
        Point of 3 Cards: <strong>4</strong>
      </p>
    </div>
  );
};

export default PanelUser;
