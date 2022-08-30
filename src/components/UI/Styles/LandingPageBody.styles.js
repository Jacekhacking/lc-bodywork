import styled from "styled-components";
import { FlexContainer } from "./Global.styles";
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
  margin: 7% 0;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
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
  max-width: 700px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-direction: column;

  h2 {
    padding-bottom: 10px;
  }
  @media (max-width: 1600px) {
    display: none;
  }
`;

export const LandingPageWrapper = styled(FlexContainer)`
  padding: 20px 100px;
  @media (max-width: 1600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
