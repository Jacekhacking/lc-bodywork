import { NavItemContainer, NavItem } from "../../Styles/Navigation.styles";

const NavItems = ({ toggleDrawerHandler, toggleHamburgerIsActive }) => {
  return (
    <NavItemContainer>
      <NavItem
        to="services"
        onClick={() => {
          toggleHamburgerIsActive();
          toggleDrawerHandler(false);
        }}
      >
        Services / Prices
      </NavItem>

      <NavItem
        to="/"
        onClick={() => {
          toggleHamburgerIsActive();
          toggleDrawerHandler(false);
        }}
      >
        Treatment Options
      </NavItem>

      <NavItem
        to="about"
        onClick={() => {
          toggleHamburgerIsActive();
          toggleDrawerHandler(false);
        }}
      >
        About Me
      </NavItem>

      <NavItem
        to="faq"
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

export default NavItems;
