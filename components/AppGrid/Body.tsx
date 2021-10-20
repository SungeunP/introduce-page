import Divider, { axisTypes } from "components/common/Divider";
import Greetings from "components/Contents/Greetings";
import TechStack from "components/Contents/TechStack";
import React from "react";

import styles from "styles/Body.module.scss";

const Body = () => {
  return (
    <div className={styles.body}>
      <section className={styles.top_section}>
        <div>
          <Greetings />
        </div>
        <div>
          <TechStack />
          <Divider axis={axisTypes.vertical} />
        </div>
      </section>
    </div>
  );
};

export default Body;
