import styled from "styled-components";
import { FlexContainerVertical } from "../Styles/Global.styles";
import Logo from "../img/LC_BodyWork_Logo_White.png";
import NavItems from "./NavItems";
import { useState } from "react";
import SideDrawer from "./SideDrawer";

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

  const NavHamburger = styled(FlexContainerVertical)`
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
        background-color: #5bafbc;
      }
    }
  `;

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false);

  const toggleHamburgerIsActive = () => {
    setHamburgerIsActive((current) => !current);
  };

  const toggleDrawerHandler = () => {
    setDrawerIsOpen((current) => !current);
  };

  let hamburgerActiveCheck = hamburgerIsActive ? "hamburger-active" : null;

  return (
    <NavContainer>
      {drawerIsOpen && (
        <SideDrawer>
          <NavItems
            toggleHamburgerIsActive={toggleHamburgerIsActive}
            toggleDrawerHandler={toggleDrawerHandler}
            handleMainContentChange={handleMainContentChange}
            handleDropdownChange={handleDropdownChange}
          />
        </SideDrawer>
      )}

      <NavLogo
        onClick={() => {
          handleMainContentChange("mainBody");
          handleDropdownChange("");
        }}
      >
        <img src={Logo} alt="" />
      </NavLogo>

      <NavHamburger
        className={hamburgerActiveCheck}
        onClick={() => {
          toggleDrawerHandler();
          toggleHamburgerIsActive();
        }}
      >
        <span />
        <span />
        <span />
      </NavHamburger>
      {/* <div>
        <NavItems
          handleMainContentChange={handleMainContentChange}
          handleDropdownChange={handleDropdownChange}
        />
      </div> */}
    </NavContainer>
  );
};

export default Navbar;
