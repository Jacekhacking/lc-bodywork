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
    line-height: 1.2;
    background-color: #252626;
    color: white;
    font-family: obvia, sans-serif;
    font-style: normal;
    font-weight: 100%;
  

    
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
    color: #62b1bd
  }
.styled-list{
  list-style: inside;
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
.show{
  display:flex
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
export const Header2 = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: ${(props) => props.color || "white"};
`;
export const Header3 = styled.h3`
  font-size: 2.3rem;
  text-transform: uppercase;
  text-decoration: underline;
  color: ${(props) => props.color || "white"};
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const FlexContainerVertical = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  color: black;
  background-color: #62b1bd;
  height: 120px;
  width: 220px;
  font-size: 1.7rem;
  border: 3px solid black;
  border-radius: 5px;
  :hover {
    color: #62b1bd;
    background-color: black;
    border: 3px solid #62b1bd;
    cursor: pointer;
  }
`;

export const TextContentPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  padding: 15px;
  *:where(:not(:last-child)) {
    margin-bottom: 1rem;
  }
  li {
    line-height: 1.2;
    font-size: 1.3rem;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.2;
    max-width: 800px;
  }
  h3 {
    max-width: 1200px;
    text-align: center;
    margin-top: 5rem;
    text-decoration: underline;
  }
  @media (max-width: 500px) {
    li {
      font-size: 1.1rem;
    }
    p {
      font-size: 1.2rem;
    }
    h3 {
      margin-top: 2rem;
    }
  }
`;
