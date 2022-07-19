import styled from "styled-components";
import img from "../img/hero-holder.jpg"


export const HeroContainer = styled.div`
  background-image: url(${img});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`

