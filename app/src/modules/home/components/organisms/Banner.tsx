import BannerSearch from "../molecules/Banner/BannerSearch";
import BannerText from "../molecules/Banner/BannerText";

const Banner = () => {
  return (
      <section className='bg-[url("/images/banner.jpg")] w-screen h-200 container mx-auto mt-28! rounded-2xl  max-h-120 mb-28 bg-center bg-cover relative'>
        <div className="absolute bg-black/25 rounded-2xl h-full w-full inset-0"></div>
        <BannerText />
        <BannerSearch />
      </section>
  );
}

export default Banner