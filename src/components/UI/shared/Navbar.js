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
  const NavSpan = styled.span`
    height: 3.5px;
    width: 25px;
    margin-top: 5.5px;

    background-color: white;
  `;

  const NavHamburger = styled(FlexContainerVertical)`
    z-index: 2;
    margin-right: 10px;
    :hover {
      cursor: pointer;
      span {
        background-color: #5bafbc;
      }
    }
  `;

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawerHandler = () => {
    setDrawerIsOpen((current) => !current);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <NavContainer>
      {drawerIsOpen && (
        <SideDrawer>
          <NavItems
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

      <NavHamburger onClick={toggleDrawerHandler}>
        <NavSpan />
        <NavSpan />
        <NavSpan />
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
