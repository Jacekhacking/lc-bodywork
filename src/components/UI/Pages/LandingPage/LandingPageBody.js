import { LandingPageBodyContainer } from "../../Styles/LandingPageBody.styles.js";
import LandingPageBodyCard from "./LandingPageBodyCard";
import Hero from "../../shared/Hero.js";

const BodyPage = () => {
  return (
    <>
      <Hero />
      <LandingPageBodyContainer>
        <LandingPageBodyCard />
      </LandingPageBodyContainer>
    </>
  );
};

export default BodyPage;
