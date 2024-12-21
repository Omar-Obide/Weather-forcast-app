import { useColorScheme } from "@mui/material";
import { CiDark } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import styles from "./ToggleMode.module.css";

const ToggleMode = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <div className={styles["dark-mode"]}>
      {mode === "dark" ? (
        <CiDark
          onClick={() => {
            setMode("light");
          }}
          className={styles.icon}
        />
      ) : (
        <MdLightMode
          onClick={() => {
            setMode("dark");
          }}
          className={styles.icon}
        />
      )}
    </div>
  );
};

export default ToggleMode;
