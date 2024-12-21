import { Card, CardContent, useColorScheme } from "@mui/material";
import useHourly from "../hooks/useHourly";
import styles from "./HourlyForecast.module.css";
import { useContext, useRef } from "react";
import modifiedDate from "../services/modifiedDate";
import { BsDroplet } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import CurrentUnitsContext from "../context/CurrentUnitsContext";

const HourlyForecast = () => {
  const { data, isLoading, error } = useHourly();
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentUnits } = useContext(CurrentUnitsContext);
  const { mode } = useColorScheme();

  if (isLoading) {
    return null;
  }

  let dataArray;
  if (data) {
    dataArray = data.hourly.data;
    dataArray.length = 24;
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const container = containerRef.current;

    if (!container) return;

    const scrollAmount = 50;
    switch (event.key) {
      case "ArrowRight":
        container.scrollLeft += scrollAmount;
        break;
      case "ArrowLeft":
        container.scrollLeft -= scrollAmount;
        break;
      default:
        break;
    }
  };

  if (!dataArray || !Array.isArray(dataArray) || dataArray.length === 0)
    return null;

  return (
    <>
      <div
        className={
          mode === "dark"
            ? `${styles.header} ${styles["header-dark"]}`
            : `${styles.header}`
        }
      >
        HOURLY FORECAST
      </div>
      <div
        ref={containerRef}
        className={styles.container}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {dataArray.map((e, index) => {
          if (!e || typeof e.temperature !== "number") {
            console.warn("Invalid data at index", index, e);
            return null;
          }

          return (
            <div className={styles.parent} key={index}>
              <Card
                className={styles.card}
                sx={{
                  borderRadius: "10px",
                  height: "100%",
                  position: "relative",
                }}
              >
                <CardContent
                  className={
                    mode === "dark"
                      ? `${styles["card-content"]} ${styles["card-content-dark"]}`
                      : `${styles["card-content"]}`
                  }
                >
                  <div>
                    <div className={styles.date}>{modifiedDate(e.date)}</div>
                    <div>
                      <img
                        src={`public/assets/set04/medium/${e.icon}.png`}
                        alt={e.icon.toString()}
                      />
                    </div>
                    <div style={{ marginTop: "-10px" }}>
                      {Math.round(e.temperature)} {currentUnits.temperature}
                    </div>
                    <div style={{ position: "relative", top: "8px" }}>
                      <div className={styles.wind}>
                        <BsDroplet className={styles.droplet} />
                        {e.precipitation.total} {currentUnits.precipitation}
                      </div>
                      <div className={styles.wind}>
                        {Math.round(e.wind.speed)} {currentUnits.wind_speed}
                        <FaPaperPlane className={styles["paper-rocket"]} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HourlyForecast;
