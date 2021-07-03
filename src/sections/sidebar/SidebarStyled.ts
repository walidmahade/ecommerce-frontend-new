import styled from "styled-components";

export const SidebarStyled = styled.div`
  padding: 20px;

  ul,li {
    list-style: none;
    padding: 0;
    margin: 0;

    ul {
      padding-left: 20px;
      margin-left: 10px;
      margin-top: 10px;
      border-left: 1px solid #ebebeb;

      ul {
        padding-left: 15px;
        margin-left: 0;
      }
    }
  }

  li {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: #131313;
    font-size: 14px;
  }

  .MenuItemIcons {
    width: 20px;
    margin-right: 10px;
  }

  .name {
    & > span svg {
      width: auto;
      height: 11px;
    }
  }
`;