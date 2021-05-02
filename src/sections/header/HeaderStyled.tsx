import styled from "styled-components";

export const HeaderStyled = styled.header`
  border-bottom: 1px solid #ebebeb;
  padding: 0 0 0 20px;

  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;

  .header-child {
    display: flex;
    flex-wrap: wrap;
    //justify-content: center;
    align-items: center;
    align-content: center;
    padding: 10px;
  }

  .search-bar-wrap {
    width: 50%;
    max-width: 600px;
    padding-right: 15px;
  }

  .location-selector-wrap {
    border-left: 1px solid ${(props) => props.theme.bgGreen};
    border-right: 1px solid ${(props) => props.theme.bgGreen};
    padding: 10px 20px;
  }

  .get-help-wrap {
    padding: 10px 20px;
    border-right: 1px solid ${(props) => props.theme.bgGreen};

    .icon {
      margin-right: 10px;
    }
  }

  .lang-select-wrap {
    padding: 10px 20px;
    border-right: 1px solid ${(props) => props.theme.bgGreen};
  }

  .user-wrap {
    flex-grow: 1;
    background-color: ${(props) => props.theme.primary};
    padding: 0;

    button {
      width: 100%;
      color: #fff;
    }
  }
`;
