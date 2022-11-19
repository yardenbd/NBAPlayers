import styled from "styled-components";

export const PlayersList = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
`;
PlayersList.displayName = "PlayersList.styled";

export const ListWrapper = styled.aside<{ backgroundColor?: string }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  height: 100vh;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transperent"};
  h1 {
    margin: 0;
  }
  .header-section {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
  }
  :last-child {
    border-left: 1px solid grey;
  }
`;
ListWrapper.displayName = "ListWrapper.styled";

export const PlayerCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px;
  width: fit-content;
`;
PlayerCardWrapper.displayName = "PlayerCardWrapper.styled";

export const TextElement = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
TextElement.displayName = "TextElement.styled";

export const FavoriteButton = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  width: fit-content;
  padding: 0;
`;
FavoriteButton.displayName = "FavoriteButton.styled";
