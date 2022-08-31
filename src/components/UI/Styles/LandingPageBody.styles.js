import styled from "styled-components";
import { FlexContainer } from "./Global.styles";
export const LandingPageBodyContainer = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const LandingPageBodyCardDiv = styled.div`
  background-image: url(${(props) => props.inputImg});
  background-color: grey;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 7% 0;
  width: 600px;
  height: 600px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 20rem;
    height: 20rem;
    margin: 0;
  }
`;

export const LandingPageBodyCardButton = styled.button`
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
  @media (min-width: 1600px) {
    display: none;
  }
`;

export const DropdownContainer = styled.div`
  max-width: 50rem;
  padding: 0 2rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    padding-bottom: 10px;
    text-decoration: underline;
  }
  @media (max-width: 1600px) {
    display: none;
  }
`;

export const DropdownContainer2 = styled.div`
  margin-top: 1rem;
  max-width: 40rem;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1600px) {
    display: none;
  }
  @media (max-width: 1000px) {
    font-size: 1.3rem;
    max-width: 20rem;
  }
`;

export const LandingPageWrapper = styled(FlexContainer)`
  padding: 20px 100px;
  @media (max-width: 1600px) {
    display: block;
    text-align: center;
  }
`;
