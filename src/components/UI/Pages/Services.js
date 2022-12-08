import {
  Header2,
  Header3,
  TextContentPageWrapper,
} from "../Styles/Global.styles";
import { ServicesAndRates } from "../../../data";

console.log(ServicesAndRates);
const Services = () => {
  return (
    <>
      <TextContentPageWrapper>
        <Header2 style={{ marginTop: "5rem" }}>Services & Rates</Header2>

        {ServicesAndRates.map((service) => (
          <>
            <Header3>{service.title}</Header3>
            <p>{service.description}</p>
            <ul>
              {service.menu.map((menu) => (
                <li style={{ display: "flex" }}>
                  <section style={{ paddingRight: "1rem" }}>
                    {menu.duration} min
                  </section>
                  <section>${menu.cost}</section>
                </li>
              ))}
            </ul>
          </>
        ))}

        <Header3 style={{ marginTop: "5rem" }}>Cancellation policy</Header3>
        <p>
          24 hours notice is required to cancel or reschedule an appointment.
          Failure to cancel at least 24 hours in advance will result in a charge
          of 50% of the scheduled session. Failure to show up(no call/no show)
          for your scheduled appointment will result in a charge of 100% of the
          session fee. If you need to reschedule due to illness or have any
          COVID-19 symptoms, please contact me as soon as possible to
          reschedule(801-449-1224).
        </p>
      </TextContentPageWrapper>
    </>
  );
};

export default Services;
