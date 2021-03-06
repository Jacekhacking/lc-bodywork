import GlobalStyles from "./components/UI/Styles/Global.styles"
import Hero from "./components/UI/Pages/Hero";
import PageBody from "./components/UI/Pages/LandingPage/LandingPageBody";
import Footer from "./components/UI/Pages/Footer";
import {useState} from "react";
import Navbar from "./components/UI/Pages/Navbar";
import About from "./components/UI/Pages/About"

function App() {

    const [mainContent, handleMainContentChange] = useState('')
    const [currentDropdown, handleDropdownChange] = useState('');



    const renderMainContent = () => {
        switch(mainContent) {
            case 'mainBody' :
                return <PageBody currentDropdown= {currentDropdown} handleDropdownChange={handleDropdownChange} />
            case 'about' :
                return <About/>
            default:
                return <PageBody currentDropdown= {currentDropdown} handleDropdownChange={handleDropdownChange} />
        }
    }



    return (
        <>
            <GlobalStyles/>
            <Navbar 
            PageBody currentDropdown= {currentDropdown} 
            handleDropdownChange={handleDropdownChange} 
            mainContent ={mainContent} 
            handleMainContentChange = {handleMainContentChange} 
            />
            <Hero/>
            {renderMainContent(mainContent)}
            <Footer/>
        </>
    );
}

export default App;
