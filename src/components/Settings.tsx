import styles from "./Settings.module.css";
import { CiSettings } from "react-icons/ci";
import ToggleMode from "./ToggleMode";
import Fade from "@mui/material/Fade";
import { useContext, useState } from "react";
import unitsContext from "../context/unitsContext";
import CurrentUnitsContext from "../context/CurrentUnitsContext";
import UNITS from "../Entities/Units";
import { useColorScheme } from "@mui/material";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setUnits } = useContext(unitsContext);
  const { setCurrentUnits } = useContext(CurrentUnitsContext);
  const { mode } = useColorScheme();

  const Units = ["Auto", "Metric", "US", "UK", "CA"];

  const getUnitKey = (unit: string) => {
    switch (unit.toLowerCase()) {
      case "metric":
        return "metric";
      case "us":
        return "us";
      case "uk":
        return "uk";
      case "ca":
        return "ca";
      default:
        return "metric";
    }
  };

  return (
    <div className={styles.container}>
      <ToggleMode />
      <CiSettings
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={
          isOpen
            ? `${styles["setting-active"]} ${styles.setting}`
            : `${styles.setting}`
        }
      />
      <Fade in={isOpen}>
        <div className={styles.parent}>
          <span className={mode === "light" ? `${styles.span}` : ""}>
            Measurenment Systems:
          </span>
          <div className={styles.units}>
            {Units.map((e, i) => (
              <button
                key={i}
                onClick={() => {
                  const unitKey = getUnitKey(e);
                  setUnits(unitKey);
                  setCurrentUnits(UNITS[unitKey]);
                  setIsOpen(false)
                }}
              >
                {e}
              </button>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Settings;
