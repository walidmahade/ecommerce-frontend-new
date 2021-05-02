import React from "react";
import styled from "styled-components";

const DropdownMenuStyled = styled.div`
  position: relative;
  cursor: pointer;

  .dd-sub-items-wrap {
    background-color: #fff;
    border: 1px solid ${(props) => props.theme.bgGreen};
    border-radius: 8px;
    padding: 10px 20px;
    position: absolute;
    top: calc(100% + 30px);
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  .dd-trigger {
    display: inline-flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    .icon {
      margin-right: 7px;
      svg {
        width: 25px;
        height: auto;
      }
    }
  }

  .dd-sub-items {
    padding: 5px 0;
    &:hover {
      color: ${(props) => props.theme.accent};
    }
  }

  &:hover {
    .dd-sub-items-wrap {
      top: calc(100% + 2px);
      opacity: 1;
      visibility: visible;
    }
  }
`;

export default function DropdownMenu(props: any) {
  return (
    <DropdownMenuStyled>
      <div className="dd-trigger">
        <span className="icon">{props.icon}</span>
        {props.name}
      </div>
      <div className="dd-sub-items-wrap">{props.children}</div>
    </DropdownMenuStyled>
  );
}
