import styled from "styled-components";

export const ButtonStyled = styled.button`
  outline: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 13px 20px;
  color: ${(props) => props.theme.bg};
  background: transparent;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  //&:hover {
  //  background-color: #ebebeb;
  //}
  &.primary-full {
    width: 100%;
    height: 100%;
  }

  &.btn-primary {
    background: ${(props) => props.theme.primary};
  }

  &.btn-outline {
    border: 1px solid ${(props) => props.theme.bgGreen};
    &:hover {
      background-color: ${(props) => props.theme.bgGreen};
    }
  }

  &.has-icon {
    padding: 5px 9px;
  }

  svg {
    height: auto;
    width: 25px;
  }
`;
