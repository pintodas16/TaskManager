import Filter from "./Filter";
import Sort from "./Sort";

function FilterContainer() {
  return (
    // <!-- filter and sort  -->
    <section className="">
      {/* <!-- container  -->  */}
      <div className="container max-w-6xl mx-auto mt-6 mb-8 px-4 py-4 border border-gray-300 bg-white border-dotted rounded-lg">
        {/* <!-- flex continaer  -->  */}
        <div className="flex items-center gap-4 justify-end">
          {/* <!-- for filtering  -->  */}
          <Filter />
          {/* <!-- for sorting  -->  */}
          <Sort />
        </div>
      </div>
    </section>
  );
}

export default FilterContainer;
