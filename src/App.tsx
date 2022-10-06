import React, { useEffect } from "react";
import { apiClient } from "./apiClient/apiClient";
import "./app.scss";
import { useAppDispatch } from "./app/hooks";
import PanelUser from "./components/PanelUser";
import Settings from "./components/Settings";
import Table from "./components/Table";
import User from "./components/User";
import { fetchCardsAsync } from "./featured/cardsSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCardsAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <Settings />
      <div className="user__vertical">
        <User />
        <User />
      </div>
      <div className="table__container">
        <Table />
      </div>
      <div className="users__horizontal">
        <User />
        <User />
      </div>
      <PanelUser />
    </div>
  );
};

export default App;
