import styled from "styled-components";
import FooterLogo from "../img/LC_BodyWork_Icon_White_Teal.png";
import FaceBookIcon from "../img/f_logo_RGB-White_72.png";
import InstagramIcon from "../img/Instagram_Glyph_White.png";
const Footer = () => {
  const FooterContainer = styled.div`
    min-height: 10%;
    background-color: grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    margin-top: 3rem;
    padding: 0 5%;
  `;

  return (
    <>
      <FooterContainer>
        <div>
          <button>filler filler</button>
        </div>
        <div>
          <img
            src={FooterLogo}
            alt=""
            style={{ height: "100px", paddingTop: "10%", paddingBottom: "10%" }}
          />
        </div>
        <div>
          <a href="">
            <img src={FaceBookIcon} alt="Facebook" style={{ height: "60px" }} />
          </a>
          <a href="https://www.instagram.com/lc.bodywork/">
            <img src={InstagramIcon} style={{ height: "60px" }} alt="" />
          </a>
        </div>
      </FooterContainer>
    </>
  );
};
export default Footer;
