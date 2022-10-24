import {
  Header2,
  Header3,
  ALink,
  TextContentPageWrapper,
} from "../Styles/Global.styles";
const Faq = () => {
  return (
    <>
      <TextContentPageWrapper>
        <Header2 style={{ marginBottom: "1rem" }}>FAQ</Header2>

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
          tip is a referral and a{" "}
          <ALink
            href="https://g.page/r/CcOCcMaWU_c5EAg/review"
            target="_blank"
            rel="noopener noreferrer"
            style={{ visited: "white" }}
          >
            review
          </ALink>
          !
        </p>
      </TextContentPageWrapper>
    </>
  );
};

export default Faq;
