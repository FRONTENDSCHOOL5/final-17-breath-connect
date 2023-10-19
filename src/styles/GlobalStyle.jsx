import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

* {
  box-sizing: border-box;
}

:root {
  font-size: 10px;
}

body {
  color: inherit;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

ol, ul, li {
  list-style: none;
}

button {
  box-shadow: none;
  border: none;
  padding: 0;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
}

textarea {
  border: none;
  overflow: none;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
}

button, input, textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  border: none;
}

img {
  width: 100%;
  vertical-align: middle;
}

.a11y-hidden { 
  position: absolute; 
  width: 1px; 
  height: 1px; 
  padding: 0; 
  margin: -1px; 
  overflow: hidden; 
  clip: rect(0, 0, 0, 0); 
  border: 0;
}
`;

export default GlobalStyle;
