import React from "react";
import Home from "../../pages/Home";
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import "./App.css";
import styled from "styled-components";

const AppStyled = styled.div`
  //border-top: 20px solid ${(props) => props.theme.accent};
`;

function App() {
  return (
    <AppStyled>
      <Header />

      <main>
        <Home />
      </main>

      <Footer />
    </AppStyled>
  );
}

export default App;
