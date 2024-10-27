import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MainImage from "./components/MainImage";
import Description from "./components/Description";
import TrendingShoes from "./components/TrendingShoes";
import LatestShoes from "./components/LatestShoes";
import ClassicsSpotlight from "./components/ClassicsSpotlight";
import ShopBySport from "./components/ShopBySport";
import MemberBenefits from "./components/MemberBenefits";
import MainImageTwo from "./components/MainImageTwo";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-6 lg:px-12">
        <MainImage />
        <Description
          title="Just In"
          subtitle="V2K GORE-TEX"
          description="The remastered runner gets an update with weatherized protection for all-day wear, no matter the weather."
        />
        <TrendingShoes />
        <LatestShoes />
        <ClassicsSpotlight />
        <ShopBySport />
        <MainImageTwo />
        <MemberBenefits />
      </div>
      <Footer />
    </>
  );
}

export default App;