import styled from "styled-components";

const LocationPage = () => {
  const LocationWrapper = styled.div`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    p {
      padding-bottom: 3rem;
      font-size: 2rem;
      max-width: 900px;
    }
    iframe {
      border: 4px solid grey;
      border-radius: 5px;
      height: 800px;
      width: 800px;
    }

    @media (max-width: 800px) {
      iframe {
        height: 400px;
        width: 400px;
      }
    }
    @media (max-width: 400px) {
      iframe {
        height: 300px;
        width: 300px;
      }
    }
  `;

  return (
    <>
      <LocationWrapper>
        <p>
          LCBODYWORK is located in Trolley Healing Hub. 515 S 700 E suite 2D.
          There is free parking in the parking garage at the Trolley Corners
          building(entrance off 515 S).
        </p>
        <iframe
          title="google map"
          key="googleMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.3465401557968!2d-111.87043435765352!3d40.75779751731134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f56817fb2211%3A0xb3579854c1ba2874!2s515%20S%20700%20E%2C%20Salt%20Lake%20City%2C%20UT%2084102!5e0!3m2!1sen!2sus!4v1662133788184!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </LocationWrapper>
    </>
  );
};
export default LocationPage;
