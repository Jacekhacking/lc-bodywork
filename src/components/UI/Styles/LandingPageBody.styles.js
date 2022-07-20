import styled from "styled-components";
import heroImg from "../img/placeholder.jpeg"

export const LandingPageBodyContainer = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const LandingPageBodyCardDiv = styled.div`
  background-color: blue;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

export const LandingPageBodyCardButton = styled.button`
  background-color: white;
  border: none;
  :hover {
    cursor: pointer;
  }
`

export const DropdownContainer = styled.div`
  padding:  30px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`