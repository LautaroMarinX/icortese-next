import LogoWrapper from "../molecules/Footer/LogoWrapper";
import Explore from "../molecules/Footer/Explore";
import LocationInfo from "../molecules/Footer/LocationInfo";
import ContactInfo from "../molecules/Footer/ContactInfo";


const Footer = () => {
  return (
    <footer className="w-screen h-fit bg-muted">
      <div className="container mx-auto px-2  py-20 grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <LogoWrapper />
        <LocationInfo />
        <ContactInfo />
        <Explore />
      </div>
    </footer>
  );
}

export default Footer