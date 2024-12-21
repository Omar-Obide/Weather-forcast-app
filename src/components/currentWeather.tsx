import { Card, CardContent, useColorScheme } from "@mui/material";
import { Grid } from "@mui/system";
import styles from "./CurrentWeather.module.css";
import useCurrentWeather from "../hooks/useCurrentWeather";
import { BsDroplet } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { BsCloudsFill } from "react-icons/bs";
import { FiWind } from "react-icons/fi";
import { BsSunglasses } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { useContext } from "react";
import CurrentUnitsContext from "../context/CurrentUnitsContext";
import unitsContext from "../context/unitsContext";
import UNITS from "../Entities/Units";

const CurrentWeather = () => {
  const { data, isLoading } = useCurrentWeather();
  const { currentUnits, setCurrentUnits } = useContext(CurrentUnitsContext);
  const { setUnits, units } = useContext(unitsContext);
  const { mode } = useColorScheme();

  if (isLoading) {
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          height: "70vh",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        Loading...
      </p>
    );
  }

  if (data?.current) {
    setUnits(data.units as "metric" | "us" | "uk" | "ca");
    setCurrentUnits(UNITS[units]);

    return (
      <Grid container spacing={2}>
        <Grid size={3.5}>
          <Card sx={{ borderRadius: "10px", height: "100%" }}>
            <CardContent
              className={
                mode === "dark"
                  ? `${styles["card-content"]} ${styles["card-content-dark"]}`
                  : `${styles["card-content"]}`
              }
            >
              <div>
                <img
                  src={`public/assets/set04/big/${data.current.icon_num}.png`}
                />
              </div>
              <div className={styles.temp}>
                {Math.round(data.current.temperature)}{" "}
                {currentUnits.temperature}
              </div>
              <div
                className={
                  mode === "dark"
                    ? `${styles["feels-like"]} ${styles["feels-like-dark"]}`
                    : `${styles["feels-like"]}`
                }
              >
                Feels like {data.current.feels_like} {currentUnits.temperature}
              </div>
              <div
                className={
                  mode === "dark"
                    ? `${styles["condition-dark"]} ${styles["condition"]}`
                    : `${styles["condition"]}`
                }
              >
                {data?.current.summary}
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={8.5}>
          <Card sx={{ borderRadius: "10px", height: "100%" }}>
            <CardContent
              className={
                mode === "dark"
                  ? `${styles["card-content"]} ${styles["card-content-dark"]}`
                  : `${styles["card-content"]}`
              }
            >
              <Grid
                height="100%"
                display="flex"
                justifyContent="center"
                container
                spacing={5}
              >
                <Grid
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  size={4.25}
                  alignItems="center"
                >
                  <div className={styles["weather-condition"]}>
                    <div className="">
                      <span className={styles.icon}>
                        <BsDroplet />
                      </span>
                      {data.current.precipitation.total}{" "}
                      {currentUnits.precipitation}
                    </div>
                    <div className={styles.text}>precipitation</div>
                  </div>
                  <div className={styles["weather-condition"]}>
                    <div>
                      <span className={styles.icon}>
                        <WiHumidity />
                      </span>
                      {data?.current.humidity} {currentUnits.humidity}
                    </div>
                    <div className={styles.text}>Humidity</div>
                  </div>
                  <div className={styles["weather-condition"]}>
                    <div>
                      <span className={styles.icon}>
                        <BsCloudsFill />
                      </span>
                      {data.current.cloud_cover} {currentUnits.cloud_cover}
                    </div>
                    <div className={styles.text}>Cloud cover</div>
                  </div>
                </Grid>
                <Grid 
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                  size={4.25}
                >
                  <div className={styles["weather-condition"]}>
                    <div>
                      <span className={styles.icon}>
                        <FiWind />
                      </span>
                      {data?.current.wind?.speed} {currentUnits.wind_speed}
                    </div>
                    <div className={styles.text}>Wind</div>
                  </div>
                  <div className={styles["weather-condition"]}>
                    <div>
                      <span className={styles.icon}>
                        <BsSunglasses />
                      </span>
                      {data?.current.uv_index} {currentUnits.uv_index}
                    </div>
                    <div className={styles.text}>UV index</div>
                  </div>
                  <div className={styles["weather-condition"]}>
                    <div>
                      <span className={styles.icon}>
                        <FaRegEye />
                      </span>
                      {data?.current.visibility} {currentUnits.visibility}
                    </div>
                    <div className={styles.text}>Visibility</div>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          height: "70vh",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        Whoops, Something Wrong Happend please try again
      </p>
    );
  }
};

export default CurrentWeather;
