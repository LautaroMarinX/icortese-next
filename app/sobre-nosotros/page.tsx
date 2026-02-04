import Values from '../src/modules/sobre-nosotros/components/organisms/Values'
import WhyChoose from '../src/modules/home/components/organisms/WhyChoose'
import AboutUsText from '../src/modules/sobre-nosotros/components/molecules/AboutUsText';

const page = () => {
  return (
    <>
      <section className="mt-28 ">
        <AboutUsText />
        <Values />
        <WhyChoose hiddenButton />
      </section>
    </>
  );
}

export default page