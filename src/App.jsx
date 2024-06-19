import Homepage from "./components/Homepage/Homepage.jsx";
import Campaigns from "./components/Campaigns/Campaigns.jsx";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre.jsx";
import News from "./components/News/News.jsx";
import LatestResources from "./components/LatestResources/LatestResources.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Footer from "./components/Commons/Footer";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import GoToTop from "./Utils/GoToTop.jsx";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Campaigns />
      <WhoWeAre />
      <AboutUs />
      <News />
      <LatestResources />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default App;
