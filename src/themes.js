import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  mainColor: "#7962F2",
  secColor: "#E97ACB",
  mainBg: "#221F2E",
  secBg: "#2F2B3F",
  textColor: "#d3d3d3",
};

export const plainTheme = {
  mainColor: "#c6393c",
  secColor: "#24305b",
  mainBg: "#fff",
  secBg: "#f2f2f2",
  textColor: "#3a4d92",
};

export const cherryTheme = {
  mainColor: "#F1002A",
  secColor: "#cc0022",
  mainBg: "#ffe6e6",
  secBg: "#FFCCD5",
  textColor: "#444445",
};

export const paperTheme = {
  mainColor: "#BF9270",
  secColor: "#7B5537",
  mainBg: "#FFEDDB",
  secBg: "#EDCDBB",
  textColor: "#444445",
};

export const greenTheme = {
  mainColor: "#76B947",
  secColor: "#2F5233",
  mainBg: " #e6ffe6",
  secBg: "#B1D8B7",
  textColor: "#444445",
};

export const amoledTheme = {
  mainColor: "#31603A",
  secColor: "#3160AC",
  mainBg: "#131418",
  secBg: "#171A1D",
  textColor: "#ffffff",
};

export const GlobalStyles = createGlobalStyle`
  a:link,
  .tags,
  .colored-p,
  .colored-p::first-letter,
  blockquote:before
  {
    color: ${(props) => props.theme.mainColor}
  }
  .border{
    border-color: ${(props) => props.theme.mainColor}
  }  
  .down-border{
    border-bottom-color: ${(props) => props.theme.secColor};
  }
  blockquote{
    border-left-color: ${(props) => props.theme.mainColor};
  }
  .stat-bar{
    background: ${(props) => props.theme.mainColor}
  }
  hr{
    border-top-color: ${(props) => props.theme.mainColor}
  }
  pre{
    border-left-color: ${(props) => props.theme.mainColor}
  }
  .tin-drum{
    fill: ${(props) => props.theme.mainColor}
  } 

  /* ---------------------------------------------------- */

  a:visited,
  code,
  h1,
  h2,
  h5,
  h3 {
    color: ${(props) => props.theme.secColor}
  }

  .song-container{
    box-shadow: ${(props) => "2px 2px 0.5px 0.5px " + props.theme.secColor};
  }
  .song-container:hover{
    box-shadow: ${(props) => "0 5px 15px " + props.theme.secColor};
  }
  .svg-title{
    fill: ${(props) => props.theme.secColor}
  }
  /* ---------------------------------------------------- */
  body,
  .no-style,
  .stat-name{
    background: ${(props) => props.theme.mainBg}
  }
  table,
  th,
  td,
  .color-icon{
    border-color: ${(props) => props.theme.mainBg}
  }
  /* ---------------------------------------------------- */
  pre,
  .song-container,
  details > summary,
  .quote,
  blockquote,
  .stats-container{
    background: ${(props) => props.theme.secBg}
  }
  .img{
    box-shadow: ${(props) => "5px 5px 2.5px 2.5px" + props.theme.secBg};
  }
  /* ---------------------------------------------------- */
  i,
  .quote,
  blockquote,
  p,
  pre,
  .song-container,
  .stat-name,
  .no-style,
  details > summary
  {
    color: ${(props) => props.theme.textColor}
  }
  /* ---------------------------------------------------- */

`;
