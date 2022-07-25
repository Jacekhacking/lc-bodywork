import GlobalStyles from "./components/UI/Styles/Global.styles"
import Hero from "./components/UI/Pages/Hero";
import PageBody from "./components/UI/Pages/LandingPage/LandingPageBody";
import Footer from "./components/UI/Pages/Footer";
import {useState} from "react";
import Navbar from "./components/UI/Pages/Navbar";
import About from "./components/UI/Pages/About"

function App() {

    const [mainContent, handleMainContentChange] = useState('')

    const renderMainContent = () => {
        switch(mainContent) {
            case 'mainBody' :
                return <PageBody/>
            case 'about' :
                return <About/>
            default:
                return <PageBody/>
        }
    }

    return (
        <>
            <GlobalStyles/>
            <Navbar mainContent ={mainContent} handleMainContentChange = {handleMainContentChange}  />
            <Hero/>
            {renderMainContent(mainContent)}
            <Footer/>
        </>
    );
}

export default App;
