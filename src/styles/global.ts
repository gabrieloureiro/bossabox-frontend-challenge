import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:none;
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  body {
    background: ${props => props.theme.colors.darkWhite};
    font: normal normal normal 20px/26px Source Sans Pro;
    letter-spacing: 0.4px;

    @media screen and (max-width: 768px) {
      font: normal normal normal 18px/24px Source Sans Pro;
    letter-spacing: 0.36px;
    }

    @media screen and (max-width: 375px) {
      font: normal normal normal 16px/22px Source Sans Pro;
      letter-spacing: 0.32px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  body {
    color: ${props => props.theme.colors.ink};
  }

  h1 {
    font: normal normal 600 42px/50px Source Sans Pro;
    letter-spacing: 0.84px;
  }

  h2 {
    font: normal normal 600 36px/40px Source Sans Pro;
    letter-spacing: 0.72px;
  }

  h3 {
    font: normal normal 600 30px/36px Source Sans Pro;
    letter-spacing: 0.6px;
  }

  h4 {
    font: normal normal 600 26px/32px Source Sans Pro;
    letter-spacing: 0.52px;
  }

  h5 {
    font: normal normal 600 24px/30px Source Sans Pro;
    letter-spacing: 0.48px;
  }
`
