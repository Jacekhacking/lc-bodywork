import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
const GlobalStyles = createGlobalStyle`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html,body{
    height: 100%;
  }

  body {
    line-height: 1;
    background-color: #252626;
    color: white;
    
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .maincolor{
    color: #5bafbc
  }

  .hamburger-active{
  transition-delay: 0.8s;
  transform: rotate(45deg);
}
.hamburger-active, .hamburger-active > span{
transition: all .4s ease-in-out;
}
.hamburger-active > span:nth-child(2){
  width: 0
}
.hamburger-active > span:nth-child(1),
.hamburger-active > span:nth-child(3){
  transition-delay: .4s;
}
.hamburger-active > span:nth-child(1){
  transform: translateY(9px);
}
.hamburger-active > span:nth-child(3){
  transform: translateY(-9px) rotate(90deg);
}

`;
export default GlobalStyles;

export const Header1 = styled.h1`
  font-size: 6.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const FlexContainerVertical = styled.div`
  display: flex;
  flex-direction: column;
`;
