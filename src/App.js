import React from "react";
import Routes from "./routes";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <>
    {process.env.REACT_APP_KEY}
    {process.env.REACT_APP_ID}
      <div className="dashboard">
        <Sidebar />
        <Routes />
      </div>
    </>
  );
}
export default App;