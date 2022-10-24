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
          window.scrollTo(0, 0);
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
          window.scrollTo(0, 0);
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
          window.scrollTo(0, 0);
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
          window.scrollTo(0, 0);
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
          window.scrollTo(0, 0);
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
      <NavItem
        to="/"
        getActiveProps={getActiveProps}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Treatment Options
      </NavItem>

      <NavItem
        to="about"
        getActiveProps={getActiveProps}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        About
      </NavItem>

      <NavItem
        to="services"
        getActiveProps={getActiveProps}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Services
      </NavItem>
      <NavItem
        to="/location"
        getActiveProps={getActiveProps}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Location
      </NavItem>

      <NavItem
        to="faq"
        getActiveProps={getActiveProps}
        onClick={() => {
          window.scrollTo(0, 0);
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
