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

    const ChangeButton = () => {
        handleMainContentChange('mainBody');
        handleDropdownChange('Page2');
        console.log('hello' )
    }


    return(
        <>

            <ul style={{
                display:'flex',
                flexWrap:'wrap'
            }}>
                {tabs.map(tab => (
                    <NavItem onClick = {ChangeButton}>{tab}</NavItem>
                ))}
                <NavItem onClick = { ()=> handleMainContentChange('about') } >About Me</NavItem>
            </ul>
        </>
    )
}

export default NavItems;