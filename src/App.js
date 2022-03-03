import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Dialogues from "./Dialogues";
import HomeNav from "./HomeNav";
import Quotes from "./Quotes";
import Proverbs from "./Proverbs";
const App = () => {
   
  return (
    <>
    <Home/>
      <Routes>
      <Route path="/*" element = {<HomeNav/>}>
          
      </Route>
      <Route path="/dialogues" element= {<Dialogues/>}></Route>
      <Route path = "/quotes" element = {<Quotes/>}></Route>
      <Route path = "/proverbs" element = {<Proverbs/>}></Route>
      </Routes>
    </>
  );
};

export default App;
