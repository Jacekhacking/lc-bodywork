import styled from "styled-components";
import FooterLogo from "../img/LC_BodyWork_Icon_White_Teal.png";
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
        <div>
          <img
            src={FooterLogo}
            alt=""
            style={{ height: "100px", paddingTop: "10%", paddingBottom: "10%" }}
          />
        </div>
      </FooterContainer>
    </>
  );
};
export default Footer;
