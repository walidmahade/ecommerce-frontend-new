import React from "react";
import styled from "styled-components";
import MenuToggleIcon from "../../images/icons/menu";
import Question from "../../images/icons/question";
import Button from "../../components/button/button";
import SearchBar from "../../components/searchBar/SearchBar";
import LocationSelector from "../../components/locationSelector/LocationSelector";
import LanguageSelector from "../../components/languageSelector/LanguageSelector";
import { HeaderStyled } from "./HeaderStyled";

const Brand = styled.div`
  font-weight: 900;
  font-size: 20px;
  color: ${(props) => props.theme.accent};
  //padding: 15px 0 15px 20px;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <div className="header-child menu-toggle-wrap">
        <Button className="menu-toggle btn-outline has-icon">
          <MenuToggleIcon className={"btn-icon"} />
        </Button>
      </div>

      <div className="header-child logo-wrap">
        <Brand>SHOP</Brand>
      </div>

      <div className="header-child search-bar-wrap">
        <SearchBar />
      </div>

      <div className="header-child location-selector-wrap">
        <LocationSelector />
      </div>

      <div className="header-child get-help-wrap">
        <span className="icon">
          <Question />
        </span>
        <div className="text">Help & Support</div>
      </div>

      <div className="header-child lang-select-wrap">
        <LanguageSelector />
      </div>

      <div className="header-child user-wrap">
        <Button className="primary-full">Sign In</Button>
      </div>
    </HeaderStyled>
  );
}
