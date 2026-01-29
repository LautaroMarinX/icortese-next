
import { propiedades } from "./src/globals/utils/propiedades";

export default function Home() {
  return (
    <section className="mx-auto container">
      <div className="grid grid-cols-3 gap-4">
        {propiedades.map((propiedad) => (
          <a href={`/propiedades/${propiedad.id}`} key={propiedad.titulo} className="p-4 shadow rounded-xl">{propiedad.titulo}</a>
        ))}
      </div>
    </section>
  );
}
