import styled from "styled-components";

export const PlayersList = styled.section<{ backgroundColor?: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transperent"};
`;
PlayersList.displayName = "PlayersList.styled";

export const ListWrapper = styled.aside`
  display: flex;
  width: 100%;
  flex-direction: column;
  h1 {
    margin: 0;
  }
  .header-section {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
  }
`;
ListWrapper.displayName = "ListWrapper.styled";

export const PlayerCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px;
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
