import Country from "./Country";

const All = ({ data, handler, isDisplay }) => {
  console.log(data);
  return (
    <div className={`${isDisplay ? "inline-block" : "hidden"}`}>
      <h1 className="text-3xl text-gray-700 font-bold">
        <span className="text-gray-500 font-semibold"> Countries:</span>{" "}
        {data.length}
      </h1>
      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
        {data.map((data) => (
          <Country
            key={data.cca2}
            data={data}
            handler={handler}
            showBtn={true}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default All;
