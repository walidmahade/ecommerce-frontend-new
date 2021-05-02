import React from "react";
import styled from "styled-components";
import Location from "../../images/icons/location";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import DropdownMenuSubItem from "../dropdownMenu/DropdownMenuSubItem";

const LocationSelectorStyled = styled.div``;

export default function LocationSelector(props: any) {
  const changeLanguage = () => {
    alert("language changed!!");
  };

  return (
    <LocationSelectorStyled>
      <DropdownMenu name={"Location"} icon={<Location />}>
        <DropdownMenuSubItem onClick={changeLanguage}>
          Dhaka
        </DropdownMenuSubItem>
        <DropdownMenuSubItem onClick={changeLanguage}>
          Mymenshingh
        </DropdownMenuSubItem>
      </DropdownMenu>
    </LocationSelectorStyled>
  );
}
