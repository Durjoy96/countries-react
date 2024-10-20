import Country from "./Country";

const Visited = ({ data, isDisplay }) => {
  return (
    <div className={` mt-12 ${isDisplay ? "inline-block" : "hidden"}`}>
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <Country key={item.cca2} data={item} showBtn={false}></Country>
        ))}
        <p className="text-red-500 text-lg font-normal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {data.length ? "" : "Nothing to Show!"}
        </p>
      </div>
    </div>
  );
};

export default Visited;
