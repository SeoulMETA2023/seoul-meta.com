import React from 'react';
// import {Outlet} from "react-router-dom";
import HeaderBar from "./components/header-bar";
import Footer from "./components/footer";

function App() {
  return (
      <div className={"mt-16"}>
          <HeaderBar/>
          <Footer/>
      </div>
  );
}

export default App;
