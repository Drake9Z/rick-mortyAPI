import Location from "./components/Location";
import ResidentInfo from "./components/ResidentInfo";
import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

const App = () => {
  const [location, setLocation] = useState({});
  const [numResidents, setNumResidents] = useState("");
  const [idRandom, setIdRandom] = useState("");
  const [residentsArray, setResidenstArray] = useState([]);
  const [locationId, setLocationId] = useState("");

  const handleLocationChange = (newLocation) => {
    setLocationId(newLocation);
  };

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/location/${
          locationId ? locationId : idRandom
        }`
      )
      .then((resp) => {
        setLocation(resp.data);
        setResidenstArray(resp.data?.residents);
      })
      .catch((error) => console.error(error));
  }, [locationId, idRandom]);

  useEffect(() => {
    setNumResidents(location.residents?.length);
  }, [location]);

  function randomNum() {
    const actualLocation = Math.floor(Math.random() * 126) + 1;
    setIdRandom(actualLocation);
  }

  window.addEventListener("load", randomNum);

  return (
    <div className="App">
      <Location
        location={location}
        onLocationChange={handleLocationChange}
        population={numResidents}
      />
      <div className="residents">
        <h2>
          {numResidents != 0
            ? " See all residents found in this dimesion"
            : "This location seems empty"}
        </h2>
        {residentsArray?.map((resident) => (
          <ResidentInfo link={resident} key={resident} />
        ))}
      </div>
    </div>
  );
};

export default App;
