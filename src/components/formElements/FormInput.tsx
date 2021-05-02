import React from "react";
import styled from "styled-components";

const FormInputStyled = styled.div`
  position: relative;

  input {
    border: 1px solid ${(props) => props.theme.bgGreen};
    border-radius: 8px;
    display: block;
    width: 100%;
    min-height: 50px;
    padding: 15px;

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.primaryLight};
      box-shadow: 0 0 0 3px ${(props) => props.theme.bgGreen};
    }
  }

  &.has-icon {
    input {
      padding-left: 50px;
    }

    .icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 15px;
    }

    svg {
      * {
        fill: ${(props) => props.theme.accent};
      }
    }
  }
`;

export default function FormInput(props: any) {
  return (
    <FormInputStyled className={props.className}>
      {props.children}
    </FormInputStyled>
  );
}
