import GlobalStyles from "./components/UI/Styles/Global.styles";
import Hero from "./components/UI/shared/Hero";
import PageBody from "./components/UI/Pages/LandingPage/LandingPageBody";
import { useState } from "react";
import Footer from "./components/UI/shared/Footer";
import Navbar from "./components/UI/shared/Navbar";
import About from "./components/UI/Pages/About";
import styled from "styled-components";
import SideDrawer from "./components/UI/shared/SideDrawer";
import NavItems from "./components/UI/shared/NavItems";

const AppWrapper = styled.body`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [mainContent, handleMainContentChange] = useState("");
  const [currentDropdown, handleDropdownChange] = useState("");

  const renderMainContent = () => {
    switch (mainContent) {
      case "mainBody":
        return (
          <PageBody
            currentDropdown={currentDropdown}
            handleDropdownChange={handleDropdownChange}
          />
        );
      case "about":
        return <About />;

      default:
        return (
          <PageBody
            currentDropdown={currentDropdown}
            handleDropdownChange={handleDropdownChange}
          />
        );
    }
  };

  return (
    <AppWrapper>
      <GlobalStyles />
      <Navbar
        PageBody
        currentDropdown={currentDropdown}
        handleDropdownChange={handleDropdownChange}
        mainContent={mainContent}
        handleMainContentChange={handleMainContentChange}
      />

      <Hero />
      {renderMainContent(mainContent)}
      <Footer />
    </AppWrapper>
  );
}

export default App;
