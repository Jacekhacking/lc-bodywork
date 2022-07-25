import styled from "styled-components";
import {Header1} from "../Styles/Global.styles";
import Img from "../img/hero-holder.jpg"

const Hero = () => {

    const HeroContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    `
    const HeroImg = styled.img`
      width: 100%;
    `

    return (
        <HeroContainer>
            <HeroImg src={Img} alt=""/>
            <Header1> SC Bodywork!!!</Header1>
        </HeroContainer>
    )
}
export default Hero;