import styled from "styled-components";

const NavItem = styled.li`
padding: 3px;
`


const NavItems = () => {

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
                    <NavItem >{tab}</NavItem>
                ))}
                <NavItem >About Me</NavItem>
            </ul>
        </>
    )
}

export default NavItems;