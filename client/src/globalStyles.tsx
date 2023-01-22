import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }

  body {
    font-size: 16px;
  }
  
  ul, li {
    list-style: none;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
