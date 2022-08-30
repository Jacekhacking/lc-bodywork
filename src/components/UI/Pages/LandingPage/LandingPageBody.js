import Hero from "../../shared/Hero.js";
import ModalitiesComponent from "./ModalitiesCard.js";
import { LandingPageBodyContainer } from "../../Styles/LandingPageBody.styles.js";

const BodyPage = () => {
  return (
    <>
      <Hero />
      <LandingPageBodyContainer>
        <ModalitiesComponent />
      </LandingPageBodyContainer>
    </>
  );
};

export default BodyPage;
