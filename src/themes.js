import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  mainColor:  "#EEEEEE",
  secColor:   "#00ADB5",
  mainBg:     "#393E46",
  secBg:      "#222831",
  textColor:  "#d3d3d3",
};

export const plainTheme = {
  mainColor:  "black",
  secColor:   "black",
  mainBg:     "#fff",
  secBg:      "#f2f2f2",
  textColor:  "black",
};

export const cherryTheme = {
  mainColor:  "#F1002A",
  secColor:   "#cc0022",
  mainBg:     "#F1F1F1",
  secBg:      "#FFCCD5",
  textColor:  "#444445",
};

export const paperTheme = {
  mainColor:  "#BF9270",
  secColor:   "#7B5537",
  mainBg:     "#FFEDDB",
  secBg:      "#EDCDBB",
  textColor:  "#444445",
}

export const greenTheme = {
  mainColor:  "#76B947",
  secColor:   "#2F5233",
  mainBg:     "#F1F1F1",
  secBg:      "#B1D8B7",
  textColor:  "#444445",
}

export const amoledTheme = {
  mainColor:  "#ffffff",
  secColor:   "#808080",
  mainBg:     "black",
  secBg:      "#0d0d0d",
  textColor:  "#f2f2f2",
}

export const GlobalStyles = createGlobalStyle`
  a:visited,
  .no-style,
  .tags
  {
    color: ${props => props.theme.mainColor}
  }
  .border{
    border-color: ${props => props.theme.mainColor}
  }  
  .stat-bar{
    background: ${props => props.theme.mainColor}
  }
  hr{
    border-top-color: ${props => props.theme.mainColor}
  }
  /* ---------------------------------------------------- */
  a:link,
  code,
  p::first-letter,
  h1,
  h3 {
    color: ${props => props.theme.secColor}
  }
  pre{
    border-left-color: ${props => props.theme.secColor}
  }
  .song-container{
    box-shadow: ${props => "2px 2px 0.5px 0.5px" + props.theme.secColor};
  }
  .tin-drum{
    fill: ${props => props.theme.secColor}
  } 
  /* ---------------------------------------------------- */
  body,
  .stat-name{
    background: ${props => props.theme.mainBg}
  }
  table,
  th,
  td,
  .color-icon{
    border-color: ${props => props.theme.mainBg}
  }
  /* ---------------------------------------------------- */
  pre,
  .song-container,
  details > summary,
  .stats-container{
    background: ${props => props.theme.secBg}
  }
  .img{
    box-shadow: ${props => "5px 5px 2.5px 2.5px" + props.theme.secBg};
  }
  /* ---------------------------------------------------- */
  i,
  .subtitle,
  p,
  pre,
  .song-container,
  .stat-name,
  details > summary
  {
    color: ${props => props.theme.textColor}
  }

`;