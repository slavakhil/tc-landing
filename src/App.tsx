import React from "react";
import "./App.css";
import 'antd/dist/antd';

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Advantages } from "./pages/Advantages";
import { Contacts } from "./pages/Contacts";
import { ExplainWork } from "./pages/ExplainWork";
import { MainInfo } from "./pages/MainInfo";
import { Question } from "./pages/Question";
import { Offer } from "./pages/Offer";
import { Header } from "antd/es/layout/layout";

import circle from './assets/circles.svg'
import circleR from './assets/circle-right.svg'
import circleB from './assets/circle-bottom.svg'

function App() {
  return (
    <>
    <div className="circle">
      <img className="center-top" src={circle} alt="" />
      <img className="center-right1" src={circleR} alt="" />
      <img className="center-left1" src={circleR} alt="" />
      <img className="center-right2" src={circleR} alt="" />
      <img className="center-left2" src={circleR} alt="" />
      <img className="center-bottom" src={circleB} alt="" />
    </div>
      <div className="App">
        <Header>
          <Navbar />
        </Header>
        <Offer />
        <MainInfo />
        <Advantages />
        <ExplainWork />
        <Contacts />
        <Question />
        <Footer />
      </div>
    </>
  );
}

export default App;
