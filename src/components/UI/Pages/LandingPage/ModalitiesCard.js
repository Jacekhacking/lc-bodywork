import { useState } from "react";
import {
  LandingPageBodyCardDiv,
  LandingPageBodyCardButton,
  DropdownContainer,
  LandingPageWrapper,
  DropdownContainer2,
} from "../../Styles/LandingPageBody.styles";
import { useAutoAnimate } from "@formkit/auto-animate/react";
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
  const [listRef] = useAutoAnimate();
  return (
    <>
      <LandingPageWrapper>
        {/*  div below is only for animations do not remove  */}
        <div ref={listRef}>
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
        </div>
      </LandingPageWrapper>
    </>
  );
};
export default ModalitiesCard;
