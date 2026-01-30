
import PropiertyCard from "./src/globals/components/atoms/PropiertyCard";
import { propiedades } from "./src/globals/utils/propiedades";

export default function Home() {
  return (
    <section className="mx-auto container mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {propiedades.map((propiedad) => (
          <PropiertyCard key={propiedad.titulo} propierty={propiedad} />
        ))}
      </div>
    </section>
  );
}
