import styled from "styled-components";
import Img1 from "../img/StockImg1.jpg";

export const LandingPageBodyContainer = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex: 1 0 auto;
`;

export const LandingPageBodyCardDiv = styled.div`
  background-image: url(${(props) => props.inputImg});
  background-color: grey;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  height: 200px;
  width: 250px;
`;

export const LandingPageBodyCardButton = styled.button`
  color: black;
  background-color: #5bafbc;
  height: 120px;
  width: 220px;
  font-size: 1.7rem;
  border: 3px solid transparent;
  :hover {
    color: #5bafbc;
    background-color: black;
    border: 3px solid #5bafbc;
    cursor: pointer;
  }
`;

export const DropdownContainer = styled.div`
  padding: 50px 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-direction: column;
  h2 {
    padding-bottom: 10px;
  }
`;
