import styled from "styled-components";
import { JsonData } from "../../../data";
import BioPic from "../img/biopic.JPG";

const About = () => {
  const AboutWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 90vh;
  `;

  const AboutHeader = styled.h2`
    padding: 2rem;
    font-size: 2rem;
    text-align: center;
  `;
  const AboutParagraph = styled.div`
    font-size: 1.5rem;
    line-height: 1.2;
    padding: 30px 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 500px;
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
  `;

  return (
    <AboutWrapper>
      <AboutParagraph>
        <img src={BioPic} alt="Bio" />

        <p>
          <AboutHeader>{JsonData[0].Bio.title}</AboutHeader>
          {JsonData[0].Bio.content}
        </p>
      </AboutParagraph>
    </AboutWrapper>
  );
};
export default About;
