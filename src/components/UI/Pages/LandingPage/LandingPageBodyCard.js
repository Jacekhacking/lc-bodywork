import {
  LandingPageBodyCardDiv,
  LandingPageBodyCardButton,
} from "../../Styles/LandingPageBody.styles";
import styled from "styled-components";
import {
  OrthopedicMassageContent,
  TherapeuticMassageContent,
  SportsMassageContent,
  CuppingContent,
} from "./Dropdown.js";
import { FlexContainer } from "../../Styles/Global.styles";
import CardImg1 from "../../img/StockImg1.jpg";
import CardImg2 from "../../img/StockImg2.jpg";
import CardImg3 from "../../img/StockImg3.jpg";
import CuppingImg from "../../img/cupping.jpg";

const LandingPageBodyCard = (props) => {
  const LandingPageFlexContainer = styled(FlexContainer)`
    padding: 20px 100px;
  `;

  return (
    <>
      <LandingPageFlexContainer>
        <LandingPageBodyCardDiv inputImg={CardImg1}>
          <LandingPageBodyCardButton>
            Orthopedic Massage
          </LandingPageBodyCardButton>
        </LandingPageBodyCardDiv>
        <OrthopedicMassageContent />
      </LandingPageFlexContainer>

      <LandingPageFlexContainer>
        <TherapeuticMassageContent />
        <LandingPageBodyCardDiv inputImg={CardImg2}>
          <LandingPageBodyCardButton>
            {" "}
            Therapeutic Massage
          </LandingPageBodyCardButton>
        </LandingPageBodyCardDiv>
      </LandingPageFlexContainer>

      <LandingPageFlexContainer>
        <LandingPageBodyCardDiv inputImg={CardImg3}>
          <LandingPageBodyCardButton>Sports Massage</LandingPageBodyCardButton>
        </LandingPageBodyCardDiv>

        <SportsMassageContent />
      </LandingPageFlexContainer>

      <LandingPageFlexContainer>
        <CuppingContent />

        <LandingPageBodyCardDiv inputImg={CuppingImg}>
          <LandingPageBodyCardButton>Cupping</LandingPageBodyCardButton>
        </LandingPageBodyCardDiv>
      </LandingPageFlexContainer>
    </>
  );
};
export default LandingPageBodyCard;
