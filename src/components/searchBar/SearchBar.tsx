import React from "react";
import styled from "styled-components";
import FormInput from "../formElements/FormInput";
import SearchIcon from "../../images/icons/search";

const SearchBarStyled = styled.div`
  //padding: 10px 20px;
  width: 100%;
`;

function SearchBar(props: any) {
  return (
    <SearchBarStyled>
      <FormInput className={"has-icon"}>
        <span className="icon">
          <SearchIcon />
        </span>
        <input type="text" placeholder={"Search products ..."} />
      </FormInput>
    </SearchBarStyled>
  );
}

export default SearchBar;
