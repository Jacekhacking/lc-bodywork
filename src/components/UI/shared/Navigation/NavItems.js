import {
  NavItemContainer,
  NavItem,
  NavItemContainerSidebar,
} from "../../Styles/Navigation.styles";

export const NavItemsSidebar = ({
  toggleDrawerHandler,
  toggleHamburgerIsActive,
}) => {
  return (
    <NavItemContainerSidebar>
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
        About
      </NavItem>

      <NavItem
        to="services"
        getActiveProps={getActiveProps}
        onClick={() => {
          toggleHamburgerIsActive();
          toggleDrawerHandler(false);
        }}
      >
        Services
      </NavItem>

      <NavItem
        to="location"
        getActiveProps={getActiveProps}
        onClick={() => {
          toggleHamburgerIsActive();
          toggleDrawerHandler(false);
        }}
      >
        Location
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
    </NavItemContainerSidebar>
  );
};

export const NavItems = () => {
  return (
    <NavItemContainer>
      <NavItem to="/" getActiveProps={getActiveProps}>
        Treatment Options
      </NavItem>

      <NavItem to="about" getActiveProps={getActiveProps}>
        About
      </NavItem>

      <NavItem to="services" getActiveProps={getActiveProps}>
        Services
      </NavItem>
      <NavItem to="/location" getActiveProps={getActiveProps}>
        Location
      </NavItem>

      <NavItem to="faq" getActiveProps={getActiveProps}>
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
