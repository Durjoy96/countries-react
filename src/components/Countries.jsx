import { useEffect, useState } from "react";
import Visited from "./Visited.jsx";
import All from "./All.jsx";

const Countries = ({ activeBtn }) => {
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
      {activeBtn === "all" ? (
        <>
        <All data={countries} handler={visitedCountriesHandler} isDisplay={true}></All> <Visited data={visitedCountries} isDisplay={false}></Visited>
        </>
      ) : (
        <>
        <All data={countries} handler={visitedCountriesHandler} isDisplay={false}></All> <Visited data={visitedCountries} isDisplay={true}></Visited>
        </>
      )}
    </div>
  );
};

export default Countries;
