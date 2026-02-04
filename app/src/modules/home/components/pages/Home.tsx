import Banner from "../organisms/Banner";
import FeaturesPropertys from "../organisms/FeaturesPropertys";
import Search from "../organisms/Search";
import WhyChoose from "../organisms/WhyChoose";


const HomePage = () => {
  return (
    <main className="my-28">
      <Banner />
      <Search />
      <FeaturesPropertys />
      <WhyChoose />
    </main>
  );
};

export default HomePage;
