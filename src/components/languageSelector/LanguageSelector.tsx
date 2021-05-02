import React, { useState } from "react";
import styled from "styled-components";

const LanguageSelectorStyled = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  .lang-option {
    font-weight: bold;
    cursor: pointer;

    &.active {
      color: ${(props) => props.theme.accent};
    }
  }

  .divider {
    height: 20px;
    width: 1px;
    margin: 0 10px;
    background-color: ${(props) => props.theme.bgGreen};
  }
`;

function LanguageSelector(props: any) {
  const [activeLang, setActiveLang] = useState("en");

  return (
    <LanguageSelectorStyled>
      <div
        className={activeLang === "en" ? "lang-option active" : "lang-option"}
        onClick={() => setActiveLang("en")}
      >
        En
      </div>
      <div className="divider" />
      <div
        className={activeLang === "bd" ? "lang-option active" : "lang-option"}
        onClick={() => setActiveLang("bd")}
      >
        Bd
      </div>
    </LanguageSelectorStyled>
  );
}

export default LanguageSelector;
