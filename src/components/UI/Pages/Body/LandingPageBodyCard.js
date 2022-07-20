import {
    LandingPageBodyCardDiv,
    LandingPageBodyCardButton,
} from "../../Styles/LandingPageBody.styles";

const LandingPageBodyCard = (props) => {

    return (
        <>
            <LandingPageBodyCardDiv>
                <div>
                    <LandingPageBodyCardButton onClick={() => props.handleDropdownChange('Page1')}>Filler</LandingPageBodyCardButton>
                </div>
            </LandingPageBodyCardDiv>

            <LandingPageBodyCardDiv>
                <div>
                    <LandingPageBodyCardButton onClick={() => props.handleDropdownChange('Page2')}>Filler</LandingPageBodyCardButton>
                </div>
            </LandingPageBodyCardDiv>

            <LandingPageBodyCardDiv>
                <div>
                    <LandingPageBodyCardButton onClick={() => props.handleDropdownChange('Page3')}>Filler</LandingPageBodyCardButton>
                </div>
            </LandingPageBodyCardDiv>

        </>
    )
}

export default LandingPageBodyCard