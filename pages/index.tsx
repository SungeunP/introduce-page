import React from "react";
import AppGrid from "components/AppGrid/AppGrid";
import styles from "styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.app}>
      <AppGrid />
    </div>
  );
}
