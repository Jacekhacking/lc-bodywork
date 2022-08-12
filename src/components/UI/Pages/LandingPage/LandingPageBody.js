import { LandingPageBodyContainer } from "../../Styles/LandingPageBody.styles.js";
import LandingPageBodyCard from "./LandingPageBodyCard";
import {
  DropdownOne,
  DropdownTwo,
  DropdownThree,
  DropdownFour,
  Dropdowns,
} from "./Dropdown.js";

const BodyPage = ({ handleDropdownChange, currentDropdown }) => {
  const renderDropdown = () => {
    switch (currentDropdown) {
      case "Orthopedic Massage":
        return <DropdownOne />;

      case "Therapeutic Massage":
        return <DropdownTwo />;

      case "Sports Massage":
        return <DropdownThree />;
      case "Cupping":
        return <DropdownFour />;

      default:
        return "";
    }
  };

  return (
    <>
      <LandingPageBodyContainer>
        <LandingPageBodyCard
          currentDropdown={currentDropdown}
          handleDropdownChange={handleDropdownChange}
        />
      </LandingPageBodyContainer>
      {renderDropdown(currentDropdown)}
    </>
  );
};

export default BodyPage;
