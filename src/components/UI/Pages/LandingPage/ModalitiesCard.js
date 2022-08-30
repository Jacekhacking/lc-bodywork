import { useState } from "react";
import {
  LandingPageBodyCardDiv,
  LandingPageBodyCardButton,
  DropdownContainer,
  LandingPageWrapper,
  DropdownContainer2,
} from "../../Styles/LandingPageBody.styles";
const ModalitiesCard = (props) => {
  const [dropdownStyle, setDropdownStyle] = useState("");
  const [dropdown, setDropdown] = useState();

  const changeDropdownStyle = () => {
    if (dropdownStyle === "") {
      setDropdownStyle("flex");
    } else {
      setDropdownStyle("");
    }
  };

  const toggleDropdown = () => {
    setDropdown((current) => !current);
    console.log(dropdown);
  };

  const renderDropdown = () => {
    switch (dropdown) {
      case true:
        return (
          <>
            <DropdownContainer2>
              <p>{props.description}</p>
            </DropdownContainer2>
          </>
        );
      case false:
        return "";
      default:
        return "";
    }
  };

  return (
    <>
      <LandingPageWrapper>
        <LandingPageBodyCardDiv inputImg={props.image}>
          <LandingPageBodyCardButton onClick={toggleDropdown}>
            {props.title}
          </LandingPageBodyCardButton>
        </LandingPageBodyCardDiv>
        <DropdownContainer>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </DropdownContainer>
        {renderDropdown(dropdown)}
      </LandingPageWrapper>
    </>
  );
};
export default ModalitiesCard;
