import styled from "styled-components";
import Img from "../img/Hero.jpg";
import LogoImg from "../img/LC_BodyWork_Logo_Color.png";

const Hero = () => {
  const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 600px;
    height: 1000px;
    background-image: url(${Img}), url(${LogoImg});
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 15px 15px black;
    img {
      height: 90%;
      width: auto;
    }
  `;

  return (
    <HeroContainer>
      <img src={LogoImg} alt="" />
    </HeroContainer>
  );
};
export default Hero;
