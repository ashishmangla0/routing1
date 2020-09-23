import React from "react";
import Routes from "./routes";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <Routes />
      </div>
    </>
  );
}
export default App;