import App from '../src/App';
import { createGlobalStyle } from "styled-components";
 const GlobalStyles = createGlobalStyle`
  html, body {
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700');
    font-family: 'Noto Sans', sans-serif;
    text-align: center;
    color: #404040;
    background: #EDEEED;
  }
    h1 {
        font-size: 4em;
        font-weight: 700;
    }
     h2 {
        font-size: 3em;
        font-weight: 700;
    }
     h3 {
        font-size: 1em;
        font-weight: 700;
    }
     h5 {
        font-size: 0.4em;
        font-weight: 400;
        margin: 1px;
    }
     .App {
        text-align: center;
    }
     .video {
        cursor: pointer;
        border: 1px solid #B0B0B0;
    }
`
 export default () => <React.Fragment><GlobalStyles /><App /></React.Fragment> 