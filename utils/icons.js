import {createGlobalStyle} from 'styled-components';

const GlobalIcons = createGlobalStyle`
  @font-face {
    font-family: icons;
    src:  url("/static/fonts/icons.eot");
    src:  url("/static/fonts/icons.eot#iefix") format("embedded-opentype"),
      url("/static/fonts/icons.ttf") format("truetype"),
      url("/static/fonts/icons.woff") format("woff"),
      url("/static/fonts/icons.svg#icons") format("svg");
    font-weight: normal;
    font-style: normal;
  }
 
  .icon {
    font-family: icons !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    display: inline-block;
    vertical-align: middle;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .icon--call:before {
    content: "\\e909";
  }
  .icon--document:before {
    content: "\\e90a";
  }
  .icon--email:before {
    content: "\\e90b";
  }
  .icon--instagram:before {
    content: "\\e900";
  }
  .icon--facebook:before {
    content: "\\e901";
  }
  .icon--newsletter:before {
    content: "\\e902";
  }
  .icon--next:before {
    content: "\\e903";
  }
  .icon--register:before {
    content: "\\e904";
  }
  .icon--telegram:before {
    content: "\\e905";
  }
  .icon--twitter:before {
    content: "\\e906";
  }
  .icon--follow:before {
    content: "\\e907";
  }
  .icon--dropdown:before {
    content: "\\e908";
  }
`;

export default GlobalIcons;
