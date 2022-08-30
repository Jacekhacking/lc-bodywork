import {
  Header2,
  Header3,
  TextContentPageWrapper,
} from "../Styles/Global.styles";

const Services = () => {
  return (
    <>
      <TextContentPageWrapper>
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
      </TextContentPageWrapper>
    </>
  );
};

export default Services;
