import React from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;
