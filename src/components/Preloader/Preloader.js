import React from "react";
import { CircularProgress } from "@mui/material";
import styles from "./Preloader.module.scss";

function Preloader() {
  return (
    <div className={styles.loadWrapper}>
      <CircularProgress className="preloader"  />
    </div>
  );
}

export default Preloader;
