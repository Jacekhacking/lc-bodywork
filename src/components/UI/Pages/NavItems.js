import styled from "styled-components";

const NavItem = styled.button`
  padding: 3px;
  background-color: transparent;
  border: none;
  :hover {
    cursor: pointer;
  }
`


const NavItems = (props) => {

    const tabs = [
        'holder',
        'holder'
    ]

    return(
        <>

            <ul style={{
                display:'flex',
                flexWrap:'wrap'
            }}>
                {tabs.map(tab => (
                    <NavItem onClick = {()=> props.handleMainContentChange('mainBody')}>{tab}</NavItem>
                ))}
                <NavItem onClick = { ()=> props.handleMainContentChange('about') } >About Me</NavItem>
            </ul>
        </>
    )
}

export default NavItems;