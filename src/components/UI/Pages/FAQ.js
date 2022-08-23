import {
  Header2,
  Header3,
  FlexContainerVertical,
} from "../Styles/Global.styles";
import styled from "styled-components";

const Faq = () => {
  const FaqContainer = styled(FlexContainerVertical)`
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    padding: 15px;
    *:where(:not(:last-child)) {
      margin-bottom: 1rem;
    }
    li {
      line-height: 1.2;
      font-size: 1.3rem;
    }
    p {
      text-align: center;
      max-width: 800px;
      font-size: 1.5rem;
      line-height: 1.2;
    }
    h3 {
      text-align: center;
      margin-top: 5rem;
      border-bottom: 3px solid white;
    }
    @media (max-width: 500px) {
      li {
        font-size: 1.1rem;
      }
      p {
        font-size: 1.2rem;
      }
      h3 {
        margin-top: 2rem;
      }
    }
  `;

  return (
    <>
      <FaqContainer>
        <Header2 style={{ marginBottom: "1rem", marginTop: "3rem" }}>
          FAQ
        </Header2>

        <Header3>
          What is Orthopedic Assessment in Massage Therapy? (And why do I need
          it?)
        </Header3>
        <p>
          Assessment is an evaluation process; a systematic process of gathering
          information. Rather than treatment based on assumptions, I use this
          information to develop clinical reasoning for your sessions.
          Assessment performs the following important functions:
        </p>
        <ul className="styled-list">
          <li>Indicates which tissues are most likely involved.</li>
          <li>Indicates the status of the involved tissues.</li>
          <li>Directs the choice of most appropriate treatment.</li>
          <li>Helps determine progress towards treatment goals.</li>
          <li>
            Determines if a client's condition falls within my scope of practice
            and expertise.
          </li>
        </ul>

        <Header3 style={{ marginTop: "5rem" }}>Tips?</Header3>
        <p>
          Tips are never expected. My rates cover the cost of doing business
          with you. Massage Therapy is my profession and I am a provider in your
          healthcare journey, like a chiropractor or dentist would be. The best
          tip is a referral!
        </p>

        <Header3 style={{ marginTop: "5rem" }}>Services & Rates</Header3>

        <ul style={{ textAlign: "center" }}>
          <li>45min- $90</li>
          <li>60min- $120</li>
          <li>90min- $175</li>
          <li>120min- $230</li>
        </ul>

        <Header3 style={{ marginTop: "5rem" }}>Cancellation policy</Header3>
        <p>
          24 hours notice is required to cancel or reschedule an appointment.
          Failure to cancel at least 24 hours in advance will result in a charge
          of 50% of the scheduled session. Failure to show up(no call/no show)
          for your scheduled appointment will result in a charge of 100% of the
          session fee. If you need to reschedule due to illness or have any
          COVID-19 symptoms, please contact me as soon as possible to
          reschedule(801-449-1224). There will be no fee charged.
        </p>

        <Header3 style={{ marginTop: "5rem" }}> Location</Header3>

        <p>
          LCBODYWORK is located in Trolley Healing Hub. 515 S 700 E suite 2D.
          There is free parking in the parking garage at the Trolley Corners
          building(entrance off 515 S).
        </p>
      </FaqContainer>
    </>
  );
};

export default Faq;
