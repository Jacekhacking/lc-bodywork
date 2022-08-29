import styled from "styled-components";
import FooterLogo from "../img/LC_BodyWork_Icon_White_Teal.png";
import FaceBookIcon from "../img/f_logo_RGB-White_72.png";
const Footer = () => {
  const FooterContainer = styled.div`
    min-height: 100px;
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
          <img src={FaceBookIcon} alt="Facebook" style={{ height: "70px" }} />
        </div>
      </FooterContainer>
    </>
  );
};
export default Footer;
