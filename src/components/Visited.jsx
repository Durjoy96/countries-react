import Country from "./Country";

const Visited = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold text-gray-500">
        Visited Countries
      </h2>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <Country key={item.cca2} data={item} showBtn={false}></Country>
        ))}
      </div>
    </div>
  );
};

export default Visited;
