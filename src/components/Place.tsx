import { useColorScheme } from "@mui/material";
import { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import LocationContext from "../context/LocationContext";
import styles from "./Place.module.css";

const Place = () => {
  const { mode } = useColorScheme();
  const { location } = useContext(LocationContext);
  const city = location.split(",")[0];
  const country = location.split(",")[1];

  return (
    <div className={styles.container}>
      <FaLocationDot className={styles.icon} />
      <div>
        <span className={styles.city}>{city} {city && ','}</span>
        <span
          className={
            mode === "light"
              ? `${styles["light-country"]}`
              : `${styles["dark-country"]}`
          }
        >
          {country}
        </span>
      </div>
    </div>
  );
};

export default Place;
