import React from "react";
import { ButtonStyled } from "./ButtonStyled";

function Button(props: any) {
  return (
    // @ts-ignore
    <ButtonStyled className={props.className}>{props.children}</ButtonStyled>
  );
}

export default Button;
