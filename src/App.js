import GlobalStyles from "./components/UI/Styles/Global.styles"
import Hero from "./components/UI/Pages/Hero";
import PageBody from "./components/UI/Pages/LandingPage/LandingPageBody";
import Footer from "./components/UI/Pages/Footer";
import {useState} from "react";
import Navbar from "./components/UI/Pages/Navbar";

function App() {

    const [mainContent, setMainContent] = useState('')


    return (
        <>
            <GlobalStyles/>
            <Navbar/>
            <Hero/>
            <PageBody/>
            <Footer/>
        </>
    );
}

export default App;
