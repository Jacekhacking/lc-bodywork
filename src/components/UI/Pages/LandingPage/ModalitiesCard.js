import { useState, useEffect, useRef } from "react";
import {
  LandingPageBodyCardDiv,
  LandingPageBodyCardButton,
  DropdownContainer,
  LandingPageWrapper,
} from "../../Styles/LandingPageBody.styles";
import { DropDownJson } from "../../../../data";

import autoAnimate from "@formkit/auto-animate";

const ModalitiesCard = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current && autoAnimate(listRef.current);
  }, [listRef]);

  const toggleDropdown = () => setDropdown(!dropdown);

  const { title, description, image } = props;
  return (
    <>
      <LandingPageWrapper ref={listRef}>
        <LandingPageBodyCardDiv value={title} inputImg={image}>
          <LandingPageBodyCardButton onClick={toggleDropdown}>
            {title}
          </LandingPageBodyCardButton>
        </LandingPageBodyCardDiv>
        <DropdownContainer>
          <h2>{title}</h2>
          <p>{description}</p>
        </DropdownContainer>
        {dropdown && (
          <DropdownContainer style={{ display: "block" }}>
            <p onClick={toggleDropdown}>{description}</p>
          </DropdownContainer>
        )}
      </LandingPageWrapper>
    </>
  );
};

const ModalitiesComponent = (props) => {
  const Contents = DropDownJson;

  return (
    <>
      {Contents.map((content) => (
        <ModalitiesCard key={content.title} {...content} />
      ))}
    </>
  );
};
export default ModalitiesComponent;
