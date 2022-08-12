import {
  LandingPageBodyCardDiv,
  LandingPageBodyCardButton,
} from "../../Styles/LandingPageBody.styles";
import CardImg1 from "../../img/StockImg1.jpg";
import CardImg2 from "../../img/StockImg2.jpg";
import CardImg3 from "../../img/StockImg3.jpg";
import CuppingImg from "../../img/cupping.jpg";
const LandingPageBodyCard = (props) => {
  // console.log(currentDropdown);
  return (
    <>
      <LandingPageBodyCardDiv inputImg={CardImg1}>
        <div>
          <LandingPageBodyCardButton
            onClick={() => props.handleDropdownChange("Orthopedic Massage")}
          >
            ORTHOPEDIC MASSAGE
          </LandingPageBodyCardButton>
        </div>
      </LandingPageBodyCardDiv>

      <LandingPageBodyCardDiv inputImg={CardImg2}>
        <div>
          <LandingPageBodyCardButton
            onClick={() => props.handleDropdownChange("Therapeutic Massage")}
          >
            THERAPEUTIC MASSAGE
          </LandingPageBodyCardButton>
        </div>
      </LandingPageBodyCardDiv>

      <LandingPageBodyCardDiv inputImg={CardImg3}>
        <div>
          <LandingPageBodyCardButton
            onClick={() => props.handleDropdownChange("Sports Massage")}
          >
            SPORTS MASSAGE
          </LandingPageBodyCardButton>
        </div>
      </LandingPageBodyCardDiv>
      <LandingPageBodyCardDiv inputImg={CuppingImg}>
        <div>
          <LandingPageBodyCardButton
            onClick={() => props.handleDropdownChange("Cupping")}
          >
            CUPPING
          </LandingPageBodyCardButton>
        </div>
      </LandingPageBodyCardDiv>
    </>
  );
};
export default LandingPageBodyCard;
