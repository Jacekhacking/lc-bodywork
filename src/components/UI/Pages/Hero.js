
import {HeroContainer, HeroImg} from "../Styles/Hero.styles";
import  {Header1 } from "../Styles/Global.styles";
import Img from "../img/hero-holder.jpg"
const Hero = () => {
    return(
        <HeroContainer>
            <HeroImg src={Img} alt="" />
            <Header1> SC Bodywork!!!</Header1>
        </HeroContainer>
    )
}
export default Hero;