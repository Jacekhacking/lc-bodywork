import GlobalStyles from "./components/UI/Styles/Global.styles"
import Header from "./components/UI/Pages/Header";
import Hero from "./components/UI/Pages/Hero";
import PageBody from "./components/UI/Pages/LandingPage/LandingPageBody";
import Footer from "./components/UI/Pages/Footer";

function App() {
  return (
    <>
        <GlobalStyles/>
        <Header/>
        <Hero/>
        <PageBody/>
        <Footer/>
    </>
  );
}

export default App;
