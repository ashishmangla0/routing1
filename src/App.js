import React from "react";
import Routes from "./routes";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <div className="dashboard">
        <Router>
          <Sidebar />
          <Routes />
        </Router>
      </div>
    </>
  );
}
export default App;