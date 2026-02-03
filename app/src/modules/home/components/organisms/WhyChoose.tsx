import FeaturesGrid from '../molecules/WhyChoose/FeaturesGrid';
import WhyChooseText from '../molecules/WhyChoose/WhyChooseText';



const WhyChoose = ({hiddenButton = false}: {hiddenButton?: boolean}) => {
  return (
    <section className="container mx-auto intersect:motion-preset-fade intersect:motion-duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <WhyChooseText hiddenButton={hiddenButton} />
        <FeaturesGrid />
      </div>
    </section>
  );
}

export default WhyChoose