import axios from "axios";
import { useEffect, useState } from "react";

const ResidentInfo = ({ link }) => {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios
      .get(link)
      .then((resp) => setDetail(resp.data))
      .catch((error) => console.error(error));
  }, []);

  const statusC = () => {
    if (detail.status === "Alive") {
      return "rgb(49, 255, 30)";
    } else if (detail.status === "Dead") {
      return "red";
    } else {
      return "black";
    }
  };

  return (
    <div className="resident_info">
      <picture className="resident_image">
        <img src={detail.image} alt="resident image" />
        <span
          className="resident_status"
          style={{ border: `1px solid ${statusC()}`, color: statusC() }}
        >
          {detail.status}
        </span>
      </picture>
      <div className="resident_data">
        <h2>{detail.name}</h2>
        <h3 className="resident_data-title">
          Specie: <p>{detail.species}</p>
        </h3>
        <h3>
          Origin: <p>{detail.origin?.name}</p>
        </h3>
        <h3 className="resident_data-title">
          Times appear: <p>{detail.episode?.length}</p>
        </h3>
      </div>
    </div>
  );
};

export default ResidentInfo;
