import {
  LandingPageBodyCardDiv,
  LandingPageBodyCardButton,
} from "../../Styles/LandingPageBody.styles";

const LandingPageBodyCard = (props) => {
  return (
    <>
      <LandingPageBodyCardDiv>
        <div>
          <LandingPageBodyCardButton
            onClick={() => props.handleDropdownChange("Page1")}
          >
            Orthopedic Massage
          </LandingPageBodyCardButton>
        </div>
      </LandingPageBodyCardDiv>

      <LandingPageBodyCardDiv>
        <div>
          <LandingPageBodyCardButton
            onClick={() => props.handleDropdownChange("Page2")}
          >
            THERAPEUTIC MASSAGE
          </LandingPageBodyCardButton>
        </div>
      </LandingPageBodyCardDiv>

      <LandingPageBodyCardDiv>
        <div>
          <LandingPageBodyCardButton
            onClick={() => props.handleDropdownChange("Page3")}
          >
            SPORTS MASSAGE
          </LandingPageBodyCardButton>
        </div>
      </LandingPageBodyCardDiv>
      <LandingPageBodyCardDiv>
        <div>
          <LandingPageBodyCardButton
            onClick={() => props.handleDropdownChange("Page4")}
          >
            CUPPING
          </LandingPageBodyCardButton>
        </div>
      </LandingPageBodyCardDiv>
    </>
  );
};
export default LandingPageBodyCard;
