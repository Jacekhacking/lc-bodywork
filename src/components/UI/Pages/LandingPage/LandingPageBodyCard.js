import {
  LandingPageBodyCardDiv,
  LandingPageBodyCardButton,
  DropdownContainer,
} from "../../Styles/LandingPageBody.styles";
import styled from "styled-components";
import { FlexContainer, Header2 } from "../../Styles/Global.styles";
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
      <Header2 style={{ textDecoration: "underline", width: "100%" }}>
        TREATMENT OPTIONS
      </Header2>

      <LandingPageFlexContainer>
        <LandingPageBodyCardDiv inputImg={CardImg2}>
          <LandingPageBodyCardButton>
            Orthopedic Massage
          </LandingPageBodyCardButton>
        </LandingPageBodyCardDiv>

        <DropdownContainer id="orthopedic massage">
          <h2>ORTHOPEDIC MASSAGE</h2>
          <p>
            Involves an orthopedic assessment, manipulation and movement of soft
            tissue to reduce pain and dysfunction. Restoring balance throughout
            the body allows us to focus on both prevention and rehabilitation of
            musculoskeletal dysfunctions. Utilized for specific pain and injury
            symptoms
          </p>
        </DropdownContainer>
      </LandingPageFlexContainer>

      <LandingPageFlexContainer style={{ flexDirection: "row-reverse" }}>
        <LandingPageBodyCardDiv inputImg={CardImg1}>
          <LandingPageBodyCardButton>
            Therapeutic Massage
          </LandingPageBodyCardButton>
        </LandingPageBodyCardDiv>

        <DropdownContainer id="therapeutic massage">
          <h2>THERAPEUTIC MASSAGE</h2>
          <p>
            Involves a variety of massage techniques for reducing minor muscle
            tension, pain, and discomfort. Activating the PNS(parasympathetic
            nervous system) or “rest and digest”, our body enters a state of
            relaxation, and relaxation breeds recovery. Utilized for recovery
            and relaxation.
          </p>
        </DropdownContainer>
      </LandingPageFlexContainer>

      <LandingPageFlexContainer>
        <LandingPageBodyCardDiv inputImg={CardImg3}>
          <LandingPageBodyCardButton>Sports Massage</LandingPageBodyCardButton>
        </LandingPageBodyCardDiv>

        <DropdownContainer id="sports massage">
          <h2>SPORTS MASSAGE</h2>
          <p>
            Geared towards people who have physically demanding lifestyles
            and/or hobbies. This kind of therapeutic massage considers the
            impact of certain activities on specific joints, tendons, ligaments,
            and muscle groups. An initial assessment is used to create a
            specially informed massage treatment plan.
          </p>
        </DropdownContainer>
      </LandingPageFlexContainer>

      <LandingPageFlexContainer style={{ flexDirection: "row-reverse" }}>
        <LandingPageBodyCardDiv inputImg={CuppingImg}>
          <LandingPageBodyCardButton>Cupping</LandingPageBodyCardButton>
        </LandingPageBodyCardDiv>

        <DropdownContainer id="cupping">
          <h2>CUPPING</h2>
          <p>
            Or Myofascial Decompression. Creates a vacuum(negative pressure)
            between the skin and underlying tissues helping to lift, stretch,
            and separate tissue layers. Facilitating the reduction of adhesions,
            hydrating the tissues, and enhancing blood flow. Resulting in
            improved mobility and a decrease in pain and dysfunction.
          </p>
        </DropdownContainer>
      </LandingPageFlexContainer>
    </>
  );
};
export default LandingPageBodyCard;
