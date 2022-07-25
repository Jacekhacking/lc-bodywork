import styled from "styled-components";

const NavItem = styled.button`
  padding: 3px;
  background-color: transparent;
  border: none;
  :hover {
    cursor: pointer;
  }
`


const NavItems = ({ handleMainContentChange, handleDropdownChange, }) => {

    const tabs = [
        'Page1',
        'Page2',
        'Page3'
    ]




    return(
        <>

            <ul style={{
                display:'flex',
                flexWrap:'wrap'
            }}>
                {tabs.map(tab => (
                    <NavItem onClick = {() => { handleDropdownChange(tab); handleMainContentChange('mainBody')}}>{tab}</NavItem>
                ))}
                <NavItem onClick = { ()=> handleMainContentChange('about') } >About Me</NavItem>
            </ul>
        </>
    )
}

export default NavItems;