import {
    PageBodyCardButton,
    PageBodyCardDiv,
} from "../../Styles/LandingPageBody.styles";

const LandingPageBodyCard = (props) => {

    return (
        <>
            <PageBodyCardDiv>
                <div>
                    <PageBodyCardButton onClick={() => props.handleDropdownChange('Page1')}>Filler</PageBodyCardButton>
                </div>
            </PageBodyCardDiv>

            <PageBodyCardDiv>
                <div>
                    <PageBodyCardButton onClick={() => props.handleDropdownChange('Page2')}>Filler</PageBodyCardButton>
                </div>
            </PageBodyCardDiv>

            <PageBodyCardDiv>
                <div>
                    <PageBodyCardButton onClick={() => props.handleDropdownChange('Page3')}>Filler</PageBodyCardButton>
                </div>
            </PageBodyCardDiv>

        </>
    )
}

export default LandingPageBodyCard