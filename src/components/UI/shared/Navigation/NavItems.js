import { NavItemContainer, NavItem } from "../../Styles/Navigation.styles";

const NavItems = ({ toggleDrawerHandler, toggleHamburgerIsActive }) => {
  return (
    <NavItemContainer>
      <NavItem
        to="services"
        getActiveProps={getActiveProps}
        onClick={() => {
          toggleHamburgerIsActive();
          toggleDrawerHandler(false);
        }}
      >
        Services / Prices
      </NavItem>

      <NavItem
        to="/"
        getActiveProps={getActiveProps}
        onClick={() => {
          toggleHamburgerIsActive();
          toggleDrawerHandler(false);
        }}
      >
        Treatment Options
      </NavItem>

      <NavItem
        to="about"
        getActiveProps={getActiveProps}
        onClick={() => {
          toggleHamburgerIsActive();
          toggleDrawerHandler(false);
        }}
      >
        About Me
      </NavItem>

      <NavItem
        to="faq"
        getActiveProps={getActiveProps}
        onClick={() => {
          toggleHamburgerIsActive();
          toggleDrawerHandler(false);
        }}
      >
        FAQ
      </NavItem>
    </NavItemContainer>
  );
};

function getActiveProps() {
  return {
    style: {
      color: "#62b1bd",
    },
  };
}

export default NavItems;
