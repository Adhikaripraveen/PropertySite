import React, { StrictMode } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Logo from "./components/Logo";
import Residence from "./components/Residence";
import Value from "./components/Value";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <StrictMode>
        <div className="h-m-section">
          <Header />
          <Main />
        </div>
        <div className="l-section">
          <Logo />
          <Residence />
          <Value />
          <Contact />
          <Footer />
        </div>
      </StrictMode>
    </>
  );
}
export default App;
