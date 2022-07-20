import styled from "styled-components";
import heroImg from "../img/placeholder.jpeg"

export const PageBodyContainer = styled.div`
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const PageBodyCardDiv = styled.div`
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

export const PageBodyCardButton = styled.button`
  background-color: white;
  border: none;

  :hover {
    cursor: pointer;
  }
`
