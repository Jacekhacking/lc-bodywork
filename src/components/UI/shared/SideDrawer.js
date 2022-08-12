import styled from "styled-components";

const SideDrawer = (props) => {
  const SideDrawerContainer = styled.aside`
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    height: 100vh;
    width: 60%;
    background: black;
    box-shadow: -3px 5px 20px black;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
  `;
  return (
    <SideDrawerContainer onClick={props.onClick}>
      {props.children}
    </SideDrawerContainer>
  );
};
export default SideDrawer;
