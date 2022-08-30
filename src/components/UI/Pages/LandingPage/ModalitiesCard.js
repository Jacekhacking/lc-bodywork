import { useState, useEffect, useRef } from "react";
import {
  LandingPageBodyCardDiv,
  LandingPageBodyCardButton,
  DropdownContainer,
  LandingPageWrapper,
  DropdownContainer2,
} from "../../Styles/LandingPageBody.styles";

import autoAnimate from "@formkit/auto-animate";
const ModalitiesCard = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current && autoAnimate(listRef.current);
  }, [listRef]);

  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <>
      <LandingPageWrapper ref={listRef}>
        <LandingPageBodyCardDiv inputImg={props.image}>
          <LandingPageBodyCardButton onClick={toggleDropdown}>
            {props.title}
          </LandingPageBodyCardButton>
        </LandingPageBodyCardDiv>
        <DropdownContainer>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </DropdownContainer>
        {dropdown && (
          <DropdownContainer2>
            <p>{props.description}</p>
          </DropdownContainer2>
        )}
      </LandingPageWrapper>
    </>
  );
};
export default ModalitiesCard;
