
import React, {useState} from "react";

const Location = ({ location, population, onLocationChange }) => {
  
  const [newLocation, setNewLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLocationChange(newLocation);
    
  }
  
  const handleChange = (event) => {
    setNewLocation(event.target.value);
  }

  return (
    <div className="location">
      <div className="location_component">
        <form className="location_searcher" onSubmit={handleSubmit}>
          <input
            type="number"
            id="idLocation"
            name="text"
            value={newLocation}
            onChange={handleChange}
            placeholder="Search a location..."
            className="text_input"
          />
          <input 
            type="submit" 
            className="btn_input"
            value="Go" 
          />
        </form>
        <div className="location_card">
          <div className="location_title">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 24 24"
              fill="none"
              color="blue"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3V21M3 12H21M12 5C15.866 5 19 8.13401 19 12C19 13.9073 18.2372 15.6364 17 16.899M12 19C8.13401 19 5 15.866 5 12C5 10.0413 5.80447 8.27052 7.10102 7"
                stroke="rgba(48, 231, 255, 0.781)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="location_title-name">
              <h3>Name: </h3>
              <p>{location.name}</p>
            </div>
          </div>
          <div className="location_content">
            <div className="location_content-type">
              <h3>Type: </h3>
              <p>{location.type}</p>
            </div>
            <div className="location_content-dp">
              <div className="location_content-dimention">
                <h3>Dimention: </h3>
                <p>{location.dimension}</p>
              </div>
              <div className="location_content-population">
                <h3>Population: </h3>
                <p>{population}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
