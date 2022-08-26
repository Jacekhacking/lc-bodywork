import { NavItemContainer, NavItem } from "../../Styles/Navigation.styles";

const NavItems = ({
  handleMainContentChange,
  handleDropdownChange,
  toggleDrawerHandler,
  toggleHamburgerIsActive,
}) => {
  const tabs = [
    "Orthopedic Massage",
    "Therapeutic Massage",
    "Sports Massage",
    "Cupping",
  ];

  return (
    <NavItemContainer>
      {tabs.map((tab) => (
        <NavItem
          to="/"
          onClick={() => {
            toggleHamburgerIsActive();
            toggleDrawerHandler(false);
          }}
        >
          {tab}
        </NavItem>
      ))}

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
