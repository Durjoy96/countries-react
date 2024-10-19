import Button from "./Button";

const Country = ({ data, handler }) => {
  const { name, flags } = data;

  const visitedHandler = (event) => {
    event.target.parentElement.parentElement.parentElement.classList.add(
      "opacity-50"
    );
    event.target.setAttribute("disabled", "true");
    event.target.innerText = "visited";
    handler(data);
  };

  return (
    <div className="border p-6 bg-gradient-to-t from-gray-100 to-gray-200 rounded-lg">
      <div className="h-[150px] w-full">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={flags.png}
          alt=""
        />
      </div>
      <div className="mt-6">
        <p className="text-xl text-gray-950 font-semibold">{name.common}</p>
        <div className="mt-4">
          <Button text="visited?" handler={visitedHandler}></Button>
        </div>
      </div>
    </div>
  );
};

export default Country;
