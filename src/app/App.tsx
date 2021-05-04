import React from "react";
import Home from "../pages/Home";
import Footer from "../sections/Footer/Footer";
import Header from "../sections/header/Header";
import "./App.css";
import styled from "styled-components";
import Sidebar from "../sections/sidebar/Sidebar";
import { useAppSelector } from "../appState/hooks";
import { sidebarIsOpen } from "../sections/sidebar/SidebarSlice";

const AppStyled = styled.div`
  //border-top: 20px solid ${(props) => props.theme.accent};
`;

const MainStyled = styled.main`
  .sidebar-wrap {
    width: 220px;
    border-right: 1px solid #ebebeb;
    position: fixed;
    left: -220px;
    height: 100vh;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }

  .page-content {
    margin-left: 0;
    transition: margin-left 0.3s ease-in-out;
  }

  &.sidebar-open {
    .sidebar-wrap {
      left: 0;
    }
    .page-content {
      margin-left: 220px;
    }
  }
`;

function App() {
  const sidebarIsOpenState = useAppSelector(sidebarIsOpen);

  return (
    <AppStyled>
      <Header />

      <MainStyled
        role="main"
        className={sidebarIsOpenState ? "sidebar-open" : ""}
      >
        <aside className="sidebar-wrap">
          <Sidebar />
        </aside>

        <div className="page-content">
          <Home />
        </div>
      </MainStyled>

      <Footer />
    </AppStyled>
  );
}

export default App;
