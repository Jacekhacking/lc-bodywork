import GlobalStyles from "./components/UI/Styles/Global.styles";
import Footer from "./components/UI/shared/Footer";
import Navbar from "./components/UI/shared/Navbar";

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
            element: () =>
              import("./components/UI/Pages/LandingPage/LandingPageBody").then(
                (module) => <module.default />
              ),
          },
          {
            path: "faq",
            element: () =>
              import("./components/UI/Pages/FAQ").then((module) => (
                <module.default />
              )),
          },

          {
            path: "about",
            element: () =>
              import("./components/UI/Pages/About").then((module) => (
                <module.default />
              )),
          },
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
