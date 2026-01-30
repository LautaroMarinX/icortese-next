import AsideContent from '../organisms/AsideContent';
import Contact from '../organisms/Contact';
import Gallery from '../organisms/Gallery';
import Header from '../organisms/Header';


const PropiedadPage = () => {



  return (
    <>
      <Header />
      <Gallery />
      <div className='flex flex-col-reverse xl:grid xl:grid-cols-3 container gap-4 mx-auto'>
          <AsideContent />
          <Contact />
      </div>
    </>
  );
}

export default PropiedadPage;