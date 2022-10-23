import styled, { css } from "styled-components";

const theme = {
  color: {
    green:{
      main: 'hsla(183, 100%, 24%, 1)',
      light: 'hsla(183, 100%, 24%, 0.2)',
      dark: 'hsla(183, 100%, 18%, 1)',
    },
    red:{
      main:'hsla(344, 100%, 42%, 1)',
      light: 'hsla(344, 100%, 42%, 0.1)',
      dark:'hsla(344, 100%, 32%, 1)',
      alert: '#cc0000'
    },
    gray:{
      main: 'hsla(0, 0%, 77%, 1)',
      light: 'hsla(0, 0%, 77%, 0.2)',
      dark: 'hsla(0, 0%, 60%, 1)',
    },
    blue:{
      main: '#005CBC'
    },

    black: '#222222',
  },
  font: {
    titleSize: '35px',
    subTitleSize: '30px',
  }
};

const contentWrapper = css`
  width: 100%;
  /* height: calc(100vh - 80px); */
  > div {
    width: 1260px;
    margin: 0 auto;
    padding: 56px 60px;
    box-sizing: border-box;
  }
`;

export { theme, contentWrapper };
/*
default font size 16px이다
*/