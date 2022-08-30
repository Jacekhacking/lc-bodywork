import { useState } from "react";
import {
  LandingPageBodyCardDiv,
  LandingPageBodyCardButton,
  DropdownContainer,
  LandingPageWrapper,
} from "../../Styles/LandingPageBody.styles";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const ModalitiesCard = (props) => {
  const [dropdownStyle, setDropdownStyle] = useState("");

  const changeDropdownStyle = () => {
    if (dropdownStyle === "") {
      setDropdownStyle("flex");
    } else {
      setDropdownStyle("");
    }
  };

  const [parent] = useAutoAnimate(/* optional config */);

  return (
    <>
      <LandingPageWrapper>
        <LandingPageBodyCardDiv inputImg={props.image}>
          <LandingPageBodyCardButton onClick={changeDropdownStyle}>
            {props.title}
          </LandingPageBodyCardButton>
        </LandingPageBodyCardDiv>

        <DropdownContainer ref={parent} style={{ display: `${dropdownStyle}` }}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </DropdownContainer>
      </LandingPageWrapper>
    </>
  );
};
export default ModalitiesCard;
