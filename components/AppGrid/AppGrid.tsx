import React from "react";
import styles from "styles/AppGrid.module.scss";
import Head from "components/AppGrid/Head";
import Body from "components/AppGrid/Body";
import Footer from "components/AppGrid/Footer";

const AppGrid = () => {
  return (
    <div className={styles.app_grid}>
      <Head />
      <Body />
      <Footer />
    </div>
  );
};

export default AppGrid;
