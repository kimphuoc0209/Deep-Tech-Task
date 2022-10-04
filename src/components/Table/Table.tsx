import React from "react";
import "./tableStyles.scss";

const Table: React.FC = () => {
  return (
    <div className="table">
      <h1 className="table__title">Start game</h1>
      <div className="table__img-card left">
        <img src="/assets/images/1-ro.jpg" className="img-left" alt="" />
        <img src="/assets/images/1.png" className="img-center" alt="" />
        <img src="/assets/images/3.png" className="img-right" alt="" />
      </div>
      <div className="table__img-card top">
        <img src="/assets/images/1-ro.jpg" className="img-left" alt="" />
        <img src="/assets/images/1.png" className="img-center" alt="" />
        <img src="/assets/images/3.png" className="img-right" alt="" />
      </div>
      <div className="table__img-card right">
        <img src="/assets/images/1-ro.jpg" className="img-left" alt="" />
        <img src="/assets/images/1.png" className="img-center" alt="" />
        <img src="/assets/images/3.png" className="img-right" alt="" />
      </div>
    </div>
  );
};

export default Table;
