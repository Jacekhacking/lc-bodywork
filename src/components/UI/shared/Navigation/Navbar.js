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
import Logo from "../../img/LC_BodyWork_Logo_White.png";

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
          <img
            src={SideDrawerLogo}
            alt="logo"
            style={{ height: "70px", paddingBottom: "2rem" }}
          />

          <button style={{ marginBottom: "3rem" }}>Book A Session!</button>

          <NavItems
            toggleHamburgerIsActive={toggleHamburgerIsActive}
            toggleDrawerHandler={toggleDrawerHandler}
            handleMainContentChange={handleMainContentChange}
            handleDropdownChange={handleDropdownChange}
          />
        </SideDrawer>
      )}

      <Link to="/">
        <NavLogo
          onClick={() => {
            handleMainContentChange("mainBody");
            handleDropdownChange("");
          }}
        >
          <img src={Logo} alt="" />
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
