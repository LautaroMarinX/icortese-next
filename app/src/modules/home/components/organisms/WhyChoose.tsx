import FeaturesGrid from '../molecules/WhyChoose/FeaturesGrid';
import WhyChooseText from '../molecules/WhyChoose/WhyChooseText';

const WhyChoose = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <WhyChooseText />
        <FeaturesGrid />
      </div>
    </section>
  );
}

export default WhyChoose