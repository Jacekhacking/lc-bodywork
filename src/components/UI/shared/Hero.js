import styled from "styled-components";
import LargeHeroImg from "../img/Hero.jpg";

import SmallHeroImg from "../img/small_hero.jpg";
import LogoImg from "../img/LC_BodyWork_Logo_Color.png";
import { Header2, StyledButton } from "../Styles/Global.styles";

const Hero = () => {
  const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 65vh;

    background-image: url(${LargeHeroImg});
    background-repeat: no-repeat;
    background-size: cover;
    img {
      height: 90%;
      width: auto;
    }
    @media (max-width: 1000px) {
      background-image: url(${SmallHeroImg});
      img {
        height: 70%;
      }
      @media (max-width: 550px) {
        img {
          height: 50%;
        }
      }
    }
  `;

  const HeroHeader = styled(Header2)`
    text-transform: uppercase;
    @media (max-width: 550px) {
      font-size: 2rem;
    }
  `;

  return (
    <>
      <HeroContainer>
        <img src={LogoImg} alt="" />
      </HeroContainer>

      <div
        style={{
          minHeight: "30vh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "black",
        }}
      >
        <HeroHeader>Pain and Injury Relief and Sports Recovery</HeroHeader>

        <a
          href=" https://lcbodyworkllc.clinicsense.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledButton>Book Now!</StyledButton>
        </a>
      </div>
    </>
  );
};
export default Hero;
