import { useEffect, useState } from "react";
import Country from "./Country.jsx";
import Visited from "./Visited.jsx";
import ToggleButtons from "./ToggleButtons.jsx";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const visitedCountriesHandler = (data) => {
    const newVisitedCountries = [...visitedCountries, data];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <ToggleButtons></ToggleButtons>
      
      <h1 className="text-3xl text-gray-700 font-bold">
        <span className="text-gray-500 font-semibold"> Countries:</span>{" "}
        {countries.length}
      </h1>
      {visitedCountries.length ? (
        <Visited data={visitedCountries}></Visited>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
        {countries.map((data) => (
          <Country
            key={data.cca2}
            data={data}
            handler={visitedCountriesHandler}
            showBtn={true}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
