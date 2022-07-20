import {LandingPageBodyContainer} from "../../Styles/LandingPageBody.styles.js"
import LandingPageBodyCard from "./LandingPageBodyCard";
import {useState} from "react";
import {DropdownOne, DropdownTwo, DropdownThree} from "./Dropdown.js";

const BodyPage = () => {

    const [currentDropdown, handleDropdownChange] = useState('');

    const renderDropdown = () => {
        switch (currentDropdown) {
            case 'Page1' :
                return <DropdownOne/>

            case 'Page2' :
                return <DropdownTwo/>

            case 'Page3' :
                return <DropdownThree/>

            default :
                return ''
        }
    }

    return (
        <>
            <LandingPageBodyContainer>
                <LandingPageBodyCard currentDropdown={currentDropdown} handleDropdownChange={handleDropdownChange}/>
            </LandingPageBodyContainer>
            {renderDropdown(currentDropdown)}
        </>
    )
}

export default BodyPage;