import styled from "styled-components";
import ReactDOM from "react-dom";

const SideDrawer = (props) => {
  const SideDrawerContainer = styled.div`
    position: fixed;
    right: 0;
    top: 0;

    height: 100vh;
    width: 60%;
    background: black;
    box-shadow: -3px 5px 20px black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 1200px) {
      display: none;
    }
  `;
  return (
    <SideDrawerContainer onClick={props.onClick}>
      {props.children}
    </SideDrawerContainer>
  );

  // return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
export default SideDrawer;
