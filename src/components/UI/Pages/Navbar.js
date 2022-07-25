import styled from "styled-components";


import NavItems from "./NavItems";

const Navbar = ({mainContent, handleMainContentChange}) => {

    const NavContainer = styled.div`
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `


    return (
        <NavContainer>
            <p>Logo Holder</p>
            <NavItems mainContent={mainContent} handleMainContentChange={handleMainContentChange}/>
        </NavContainer>
    )
}

export default Navbar
