import { useColorScheme } from "@mui/material";
import { useContext } from "react";
import PlaceContext from "../context/placeContext";
import CurrentWeather from "./currentWeather";
import DailyForcast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import styles from "./WeatherGrid.module.css";

const WeatherGrid = () => {
  const { placeID } = useContext(PlaceContext);
  const { mode } = useColorScheme();
  if (!placeID) {
    return (
      <main
        className={
          mode === "dark"
            ? `${styles.main} ${styles["main-dark"]}`
            : `${styles.main}`
        }
      >
        <p>Search For a City</p>
      </main>
    );
  }

  return (
    <div
      className={
        mode === "dark" ? `${styles.container}` : `${styles.container}`
      }
    >
      <CurrentWeather></CurrentWeather>
      <HourlyForecast />
      <DailyForcast />
    </div>
  );
};

export default WeatherGrid;
