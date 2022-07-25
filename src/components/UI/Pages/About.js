import styled from "styled-components";

const About = () => {
    const AboutParagraph = styled.p`
      font-size: 2rem;
      padding:  30px 100px;
    `

    return (
        <>
            <AboutParagraph> ABOUT ME!!!!! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, excepturi quos. Accusamus adipisci
                alias doloremque, dolores est minus nihil nisi odit officia quas reprehenderit repudiandae sequi,
                tempore temporibus totam, unde.</AboutParagraph>
        </>
    )
}
export default About;