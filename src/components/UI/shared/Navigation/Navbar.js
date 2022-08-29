import { useState } from "react";
import { Link } from "@tanstack/react-location";

import SideDrawerLogo from "../../img/LC_BodyWork_Icon_White_Teal.png";
import SideDrawer from "../SideDrawer";
import NavItems from "./NavItems";

import {
  NavContainer,
  NavLogo,
  NavHamburger,
} from "../../Styles/Navigation.styles";
import { StyledButton } from "../../Styles/Global.styles";
import Logo from "../../img/LC_BodyWork_Icon_White.png";

const Navbar = ({ handleMainContentChange, handleDropdownChange }) => {
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
          <Link
            to="/"
            onClick={() => {
              toggleDrawerHandler(false);
              toggleHamburgerIsActive();
            }}
          >
            <img
              src={SideDrawerLogo}
              alt="logo"
              style={{ height: "120px", paddingBottom: "2rem" }}
            />
          </Link>

          <NavItems
            toggleHamburgerIsActive={toggleHamburgerIsActive}
            toggleDrawerHandler={toggleDrawerHandler}
            handleMainContentChange={handleMainContentChange}
            handleDropdownChange={handleDropdownChange}
          />
          <StyledButton style={{ marginTop: "2rem", height: "70px" }}>
            Book A Session!
          </StyledButton>
        </SideDrawer>
      )}

      <Link to="/">
        <NavLogo>
          <img src={Logo} alt="LC BODYWORK logo" />
        </NavLogo>
      </Link>

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