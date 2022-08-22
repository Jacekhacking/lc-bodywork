import GlobalStyles from "./components/UI/Styles/Global.styles";
import Hero from "./components/UI/shared/Hero";
import PageBody from "./components/UI/Pages/LandingPage/LandingPageBody";

import Footer from "./components/UI/shared/Footer";
import Navbar from "./components/UI/shared/Navbar";
import About from "./components/UI/Pages/About";
import Faq from "./components/UI/Pages/FAQ";

import { Outlet, ReactLocation, Router } from "@tanstack/react-location";

function App() {
  // Set up a ReactLocation instance
  const location = new ReactLocation();

  return (
    <>
      <Router
        location={location}
        routes={[
          {
            path: "/",
            element: (
              <>
                <Hero />
                <PageBody />
              </>
            ),
          },
          { path: "faq", element: <Faq /> },

          { path: "about", element: <About /> },
        ]}
      >
        <GlobalStyles />
        <Navbar />

        <Outlet />
        <Footer />
      </Router>
    </>
  );
}

export default App;
