import PropertysGrid from '../molecules/FeaturesPropertys/PropertysGrid';

const FeaturesPropertys = () => {
  return (
    <section className="mb-20 container mx-auto intersect:motion-preset-fade intersect:motion-duration-700">
      <div className="mb-8">
        <h2 className="text-3xl">Propiedades Destacadas</h2>
      </div>
      <PropertysGrid />
    </section>
  );
}

export default FeaturesPropertys