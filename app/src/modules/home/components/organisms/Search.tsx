import SearchForm from '../molecules/SearchForm/SearchForm';

const Search = () => {
  return (
    <section className="w-full container mx-auto intersect:motion-preset-fade intersect:motion-duration-700">
      <div className="h-120 mb-28 rounded-2xl  p-2 flex items-end bg-cover bg-center bg-[url(/images/banner.jpg)]">
        <SearchForm />
      </div>
    </section>
  );
}

export default Search;