import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-location";
import SideDrawerLogo from "../../img/LC_BodyWork_Icon_White_Teal.png";
import SideDrawer from "../SideDrawer";
import { NavItems, NavItemsSidebar } from "./NavItems";

import {
  NavContainer,
  NavLogo,
  NavHamburger,
} from "../../Styles/Navigation.styles";
import { StyledButton } from "../../Styles/Global.styles";
import Logo from "../../img/LC_BodyWork_Icon_White.png";
import Backdrop from "../Backdrop";

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setDrawerIsOpen(false);
        setHamburgerIsActive(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavContainer>
      {drawerIsOpen && (
        <Backdrop
          onClick={() => {
            toggleDrawerHandler(false);
            toggleHamburgerIsActive();
          }}
        />
      )}
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

          <NavItemsSidebar
            toggleHamburgerIsActive={toggleHamburgerIsActive}
            toggleDrawerHandler={toggleDrawerHandler}
          />
          <a
            href=" https://lcbodyworkllc.clinicsense.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledButton style={{ marginTop: "2rem", height: "70px" }}>
              Book A Session!
            </StyledButton>
          </a>
        </SideDrawer>
      )}

      <Link to="/">
        <NavLogo>
          <img src={Logo} alt="LC BODYWORK logo" />
        </NavLogo>
      </Link>

      <div>
        <NavItems />
      </div>

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
    </NavContainer>
  );
};

export default Navbar;
