import styled from "styled-components";
import Logo from "../img/LC_BodyWork_Logo_White.png";
import NavItems from "./NavItems";

const Navbar = ({ handleMainContentChange, handleDropdownChange }) => {
  const NavContainer = styled.div`
    height: 65px;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1;
  `;
  const NavLogo = styled.button`
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
  return (
    <NavContainer>
      <NavLogo
        onClick={() => {
          handleMainContentChange("mainBody");
          handleDropdownChange("");
        }}
      >
        <img src={Logo} alt="" />
      </NavLogo>
      <NavItems
        handleMainContentChange={handleMainContentChange}
        handleDropdownChange={handleDropdownChange}
      />
    </NavContainer>
  );
};

export default Navbar;
