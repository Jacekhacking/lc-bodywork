import styled from "styled-components";
import { AboutData } from "../../../data";
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
    }

    img {
      width: min(600px, 65%);
      height: auto;
      padding: 0.5rem;
    }
    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      max-width: 800px;
      text-align: center;
      ul {
        padding-top: 1.2rem;
        font-size: 1.2rem;
        a {
          color: white;
          font-size: 0.9rem;
        }
        a:hover {
          color: #62b1bd;
        }
      }
    }

    @media (max-width: 1300px) {
      flex-direction: column;
    }
  `;
  const AboutComponentData = AboutData[0];
  const AboutCerts = AboutData[0].certs;

  return (
    <>
      <AboutWrapper>
        <img src={BioPic} alt="Bio" />
        <div>
          <AboutHeader>{AboutComponentData.title}</AboutHeader>
          {AboutComponentData.content}
          <ul>
            {AboutCerts.map((content) => (
              <li>
                {content.title}{" "}
                <a
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Their Site
                </a>
              </li>
            ))}
          </ul>
        </div>
      </AboutWrapper>
    </>
  );
};
export default About;
