import styled from "styled-components";
import FooterLogo from "../img/LC_BodyWork_Icon_White_Teal.png";
import FaceBookIcon from "../img/f_logo_RGB-White_72.png";
import InstagramIcon from "../img/Instagram_Glyph_White.png";
const Footer = () => {
  const FooterContainer = styled.div`
    background-color: grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    padding: 0 1%;
    font-size: 1.3rem;
    a {
      padding: 5px;

      :visited {
        color: inherit;
      }
      :hover {
        color: #62b1bd;
      }
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        color: white;
      }
      img {
        height: 50px;
        padding: 5px;
        border-radius: 50px;
        &:hover {
          background-color: #62b1bd;
        }
      }
      @media (max-width: 800px) {
        flex-direction: column;
      }
    }
    @media (max-width: 800px) {
      flex-direction: column;
    }
  `;
  const socialMediaDiv = styled.div`
    @media (max-width: 800px) {
      display: flex;
    }
  `;

  return (
    <>
      <FooterContainer>
        <img
          src={FooterLogo}
          alt="LC Bodyworks Logo"
          style={{ height: "80px", paddingTop: "1%", paddingBottom: "1%" }}
        />

        <div>
          <ul>
            <li>
              Email:
              <a href="mailto:lisa@lcbodywork.com">lisa@lcbodywork.com</a>
            </li>
            <li>Phone: 801-449-1124</li>
          </ul>
          <socialMediaDiv>
            <a
              href="https://www.facebook.com/lc.bodywork/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FaceBookIcon} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/lc.bodywork/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram" />
            </a>
          </socialMediaDiv>
        </div>
      </FooterContainer>
    </>
  );
};
export default Footer;
