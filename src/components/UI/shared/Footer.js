import styled from "styled-components";

const Footer = () => {
  const FooterContainer = styled.div`
    min-height: 100px;
    background-color: grey;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-shrink: 0;
    margin-top: 3rem;
  `;

  return (
    <>
      <FooterContainer>
        <div>holder</div>
        <div>holder2</div>
        <div>holder3</div>
      </FooterContainer>
    </>
  );
};
export default Footer;
