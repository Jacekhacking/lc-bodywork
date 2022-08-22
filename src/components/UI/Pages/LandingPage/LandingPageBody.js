import { LandingPageBodyContainer } from "../../Styles/LandingPageBody.styles.js";
import LandingPageBodyCard from "./LandingPageBodyCard";

const BodyPage = ({ handleDropdownChange, currentDropdown }) => {
  return (
    <>
      <LandingPageBodyContainer>
        <LandingPageBodyCard
          currentDropdown={currentDropdown}
          handleDropdownChange={handleDropdownChange}
        />
      </LandingPageBodyContainer>
    </>
  );
};

export default BodyPage;
