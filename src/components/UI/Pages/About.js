import styled from "styled-components";
import { JsonData } from "../../../data";
import BioPic from "../img/biopic.JPG";

const About = () => {
  const AboutHeader = styled.h3`
    padding: 2rem;
    font-size: 2.5rem;
    text-align: center;
  `;
  const AboutWrapper = styled.div`
    font-size: 1.5rem;
    line-height: 1.4;
    padding: 30px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    @media (max-width: 1200px) {
      font-size: 1.4rem;
      padding: 10px 30px;
    }

    img {
      width: min(600px, 65%);
      height: auto;
      padding: 1rem;
    }
    p {
      display: flex;
      justify-content: center;
      flex-direction: column;
      max-width: 800px;
      text-align: center;
    }

    @media (max-width: 1300px) {
      flex-direction: column;
    }
  `;

  return (
    <>
      <AboutWrapper>
        <img src={BioPic} alt="Bio" />
        <p>
          <AboutHeader>{JsonData[0].Bio.title}</AboutHeader>
          {JsonData[0].Bio.content}
        </p>
      </AboutWrapper>
    </>
  );
};
export default About;
