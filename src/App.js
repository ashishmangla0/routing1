import React from "react";
import Routes from "./routes";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <>
    {process.env.DOMAIN}
    {process.env.API_KEY}
      <div className="dashboard">
        <Sidebar />
        <Routes />
      </div>
    </>
  );
}
export default App;