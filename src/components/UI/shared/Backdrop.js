import ReactDOM from "react-dom";
import styled from "styled-components";

const Backdrop = (props) => {
  const BackdropDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 1;
    @media (min-width: 1200px) {
      display: none;
    }
  `;

  return ReactDOM.createPortal(
    <BackdropDiv onClick={props.onClick}></BackdropDiv>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
