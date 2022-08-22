import styled from "styled-components";
import { JsonData } from "../../../data";

const About = () => {
  const AboutHeader = styled.h2`
    font-size: 2rem;
    text-align: center;
  `;
  const AboutParagraph = styled.p`
    font-size: 1.5rem;
    padding: 30px 100px;
  `;

  return (
    <>
      <AboutHeader>{JsonData[0].Bio.title}</AboutHeader>
      <AboutParagraph>{JsonData[0].Bio.content}</AboutParagraph>
    </>
  );
};
export default About;
