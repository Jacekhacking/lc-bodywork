import styled from "styled-components";

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

const NavItem = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 1.3rem;
  border-bottom: 2px solid transparent;
  :hover {
    color: #5bafbc;
    border-bottom: 2px solid #5bafbc;

    cursor: pointer;
  }
`;

const NavItems = ({ handleMainContentChange, handleDropdownChange }) => {
  const tabs = [
    "Orthopedic Massage",
    "Therapeutic Massage",
    "Sports Massage",
    "Cupping",
    "FAQ",
  ];

  return (
    <NavItemContainer>
      {tabs.map((tab) => (
        <NavItem
          onClick={() => {
            handleDropdownChange(tab);
            handleMainContentChange("mainBody");
          }}
        >
          {tab}
        </NavItem>
      ))}
      <NavItem onClick={() => handleMainContentChange("about")}>
        About Me
      </NavItem>
    </NavItemContainer>
  );
};

export default NavItems;
