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

function App() {
  return (
    <>
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
