import styled from "styled-components";


import NavItems from "./NavItems";

const Navbar = ({ handleMainContentChange, handleDropdownChange,  }) => {

    const NavContainer = styled.div`
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `
    const NavLogo = styled.button`
      background-color: transparent;
      border: none;
      :hover{
        cursor: pointer;
      }
    `
    return (
        <NavContainer>
            <NavLogo onClick={() => {
                handleMainContentChange('mainBody')
                handleDropdownChange('')
            }}>Logo Holder</NavLogo>
            <NavItems 
            
            handleMainContentChange={handleMainContentChange} 
            handleDropdownChange={handleDropdownChange}  
            />
        </NavContainer>
    )
}

export default Navbar
