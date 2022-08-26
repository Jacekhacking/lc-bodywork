import styled from "styled-components";
import { FlexContainerVertical } from "./Global.styles";
import { Link } from "@tanstack/react-location";
export const NavContainer = styled.div`
  height: 65px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
`;
export const NavLogo = styled.button`
  background-color: transparent;
  color: white;
  border: none;

  img {
    height: 60px;
  }
  :hover {
    cursor: pointer;
  }
`;

export const NavHamburger = styled(FlexContainerVertical)`
  z-index: 2;
  margin-right: 30px;
  transition: all 0.4s ease-in-out;

  span {
    height: 2px;
    width: 28px;
    background-color: white;
    transition: all 0.4s ease-in-out;
  }
  span:not(:last-child) {
    margin-bottom: 7px;
  }

  :hover {
    cursor: pointer;
    span {
      background-color: #62b1bd;
    }
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin-bottom: 25px;
  }

  @media (max-width: 1000px) {
  }
`;

export const NavItem = styled(Link)`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 1.5rem;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  :hover {
    color: #62b1bd;
    border-bottom: 2px solid #62b1bd;

    cursor: pointer;
  }
`;
