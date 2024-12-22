import { Card, CardContent, useColorScheme } from "@mui/material";
import { useContext, useRef } from "react";
import { BsDroplet } from "react-icons/bs";
import CurrentUnitsContext from "../context/CurrentUnitsContext";
import useDailyForcast from "../hooks/useDailyForecast";
import FullDay from "../services/fullDay";
import styles from "./DailyForecast.module.css";

const DailyForecast = () => {
  const { data, isLoading, error } = useDailyForcast();
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentUnits } = useContext(CurrentUnitsContext);
  const { mode } = useColorScheme();

  if (isLoading) {
    return null;
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

  if (!data) return null;
  return (
    <>
      <div
        className={
          mode === "dark"
            ? `${styles.header} ${styles["header-dark"]}`
            : `${styles.header}`
        }
      >
        21 DAYS FORECAST
      </div>
      <div
        ref={containerRef}
        className={styles.container}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {data.daily.data.map((e, i) => (
          <div className={styles.parent}>
            <div
              className={
                mode === "dark"
                  ? `${styles.day} ${styles["day-dark"]}`
                  : `${styles.day}`
              }
            >
              {FullDay(e.day)}
            </div>
            <Card
              key={i}
              className={styles.card}
              sx={{ borderRadius: "10px", height: "100%" }}
            >
              <CardContent
                className={
                  mode === "dark"
                    ? `${styles["card-content"]} ${styles["card-content-dark"]}`
                    : `${styles["card-content"]}`
                }
              >
                {/* public/assets/set04/big/${data.current.icon_num}.png */}
                <div>
                  <div>
                    <img src={`/assets/set04/medium/${e.icon}.png`} />
                  </div>
                  <div className={styles.temp}>
                    <div
                      className={
                        mode === "dark"
                          ? `${styles["temp-max"]} ${styles["temp-max-dark"]}`
                          : `${styles["temp-max"]}`
                      }
                    >
                      {Math.round(e.temperature_max)} {currentUnits.temperature}
                    </div>
                    <div className={styles["temp-min"]}>
                      {Math.round(e.temperature_min)} {currentUnits.temperature}
                    </div>
                  </div>
                  <div className={styles.precipitation}>
                    <BsDroplet className={styles.droplet} />
                    {e.precipitation.total} {currentUnits.precipitation}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default DailyForecast;
