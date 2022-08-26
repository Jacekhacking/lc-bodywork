import styled from "styled-components";
import { Link } from "@tanstack/react-location";

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin-bottom: 25px;
  }

  @media (max-width: 1000px) {
  }
`;

const NavItem = styled(Link)`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 1.5rem;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  :hover {
    color: #62b1bd;
    border-bottom: 2px solid #62b1bd;

    cursor: pointer;
  }
`;

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
