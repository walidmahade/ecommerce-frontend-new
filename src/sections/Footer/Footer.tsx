import React from "react";
import { sidebarIsOpen } from "../sidebar/SidebarSlice";
import { useAppSelector } from "../../appState/hooks";
import styled from "styled-components";

const FooterStyled = styled.footer`
  margin-left: 0;
  transition: margin-left 0.3s ease-in-out;

  &.sidebar-open {
    margin-left: 220px;
  }
`;

export default function Footer() {
  const sidebarIsOpenState = useAppSelector(sidebarIsOpen);
  return (
    <FooterStyled className={sidebarIsOpenState ? "sidebar-open" : ""}>
      Footer
    </FooterStyled>
  );
}
