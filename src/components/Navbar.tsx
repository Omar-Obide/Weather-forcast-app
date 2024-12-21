import { useColorScheme } from "@mui/material";
import styles from "./Navbar.module.css";
import Place from "./Place";
import Search from "./Search";
import Settings from "./Settings";

const Navbar = () => {
  const { mode } = useColorScheme();
  return (
    <nav
      className={
        mode === "dark"
          ? `${styles.navbar} ${styles["navbar-dark"]}`
          : `${styles.navbar} ${styles['navbar-light']}`
      }
    >
      <Place />
      <Search />
      <Settings />
    </nav>
  );
};

export default Navbar;
