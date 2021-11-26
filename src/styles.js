import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');

* {
  box-sizing: border-box;
}

html { 
  height: 100%;
}

body {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  padding: 32px;
  margin: 0;
  padding: 0;
  font-family: 'Kalam', cursive;

  
}
div #root {
    height: 100%;


    
  }
`;

export const Root = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 50px 0 100px;

  .img-container {
    padding-bottom: 12px;
  }
`;

export const PhotoCard = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const Footer = styled.footer`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: silver;

  button {
    margin: 0 10px;
  }
`;

export const GalleryWrapper = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;

  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px;

  @media (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
  @media (max-width: 480px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;

    -moz-column-width: 100%;
    column-width: 100%;
  }
`;

export const Pics = styled.div`
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
  margin-top: 12px;

  img {
    border-radius: 10px;
  }

  &:hover {
    img {
      filter: opacity(0.8);
    }
  }
`;

export const Model = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  transition: opacity 0.4s ease, visibility 0.4s ease,
    transform 0.5s ease-in-out;
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
  overflow: hidden;
  z-index: 999;

  & img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
  }

  &.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);

    & button {
      position: fixed;
      top: 10px;
      right: 10px;

      padding: 5px;
      cursor: pointer;
    }
  }
`;
