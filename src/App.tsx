import React from "react";
import "./app.scss";
import PanelUser from "./components/PanelUser";
import Settings from "./components/Settings";
import Table from "./components/Table";
import User from "./components/User";

const App: React.FC = () => {
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
