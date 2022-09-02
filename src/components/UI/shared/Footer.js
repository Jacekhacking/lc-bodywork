import styled from "styled-components";
import FooterLogo from "../img/LC_BodyWork_Icon_White_Teal.png";
import FaceBookIcon from "../img/f_logo_RGB-White_72.png";
import InstagramIcon from "../img/Instagram_Glyph_White.png";
const Footer = () => {
  const FooterContainer = styled.div`
    min-height: 5vh;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: column; */
    flex-shrink: 0;
    margin-top: 1rem;
    padding: 0 5%;

    a {
      padding-left: 10px;

      :visited {
        color: inherit;
      }
      :hover {
        color: #62b1bd;
      }
    }
    @media (max-width: 800px) {
      flex-direction: column;
    }
  `;

  return (
    <>
      <FooterContainer>
        <img
          src={FooterLogo}
          alt=""
          style={{ height: "100px", paddingTop: "1%", paddingBottom: "1%" }}
        />

        <div>
          <a href="">
            <img src={FaceBookIcon} alt="Facebook" style={{ height: "40px" }} />
          </a>
          <a href="https://www.instagram.com/lc.bodywork/">
            <img src={InstagramIcon} style={{ height: "40px" }} alt="" />
          </a>
        </div>
      </FooterContainer>
    </>
  );
};
export default Footer;
