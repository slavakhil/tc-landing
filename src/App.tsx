import React from "react";
import "./App.css";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Advantages } from "./pages/Advantages";
import { Contacts } from "./pages/Contacts";
import { ExplainWork } from "./pages/ExplainWork";
import { MainInfo } from "./pages/MainInfo";
import { Question } from "./pages/Question";
import { Offer } from "./pages/Offer";
import { Header } from "antd/es/layout/layout";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

function App() {
  const notify = () => toast("Wow so easy!");
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
