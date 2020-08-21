import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    max-width: 100%;
    overflow-x: hidden;
    font-family: 'Europa', 'Avenir', sans-serif;
    transition: all 0.5s linear;
  }

  svg .a{
    fill: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
    stroke: ${({ theme }) => theme.accent};
  }

  a {
    color: ${({ theme }) => theme.text};
  }

  a:hover {
    color: ${({ theme }) => theme.accent};
  }
  
  .dropdown-menu {
    background-color: ${({ theme }) => theme.background};
  }

  .dropdown-item {
    color: ${({ theme }) => theme.text};
  }
  
  button {
    color: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => theme.text};
  }
  
  button:hover {
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.text};
  }

  input.form-control:-webkit-autofill,
  input.form-control:-webkit-autofill:hover, 
  input.form-control:-webkit-autofill:focus {
    color: ${({ theme }) => theme.text} !important;
    background-color: ${({ theme }) => theme.background} !important;
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.background} inset;
 
  }

  section:nth-of-type(1) {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.background};
  }

  section:nth-of-type(2) {
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.white};
  }

  section:nth-of-type(3) {
      background-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.background};
  }

  section:nth-of-type(4) {
      background-color: ${({ theme }) => theme.blue};
      color: ${({ theme }) => theme.white};
  }

  h1.res-header {
    background-color: ${({ theme }) => theme.background};
  }
  
  .modal-content {
    background-color: ${({ theme }) => theme.background}
  }

  .modal-header span {
    color: ${({ theme }) => theme.text}
  }

  .card {
    background-color: ${({ theme }) => theme.background};
    border: 1px ${({ theme }) => theme.text} solid;
  }
`