import React from "react";

import NavBar from "../NavBar/index";
import PageInicial from "../PageInicial/index";
import BarraInfo from "../BarraInfo/index";
import Apostas from "../Apostas/index";
import Cassino from "../Cassino/index";

import banner from "../../assets/img/banner.jpg"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <PageInicial/>
      <BarraInfo/>
      <Apostas/>
      <img src={banner} alt="Banner F12" width="100%"/>
      <Cassino/>
    </div>
  );
}

export default App;
