import Divider, { axisTypes } from "components/common/Divider";
import Greetings from "components/Contents/Greetings/Greetings";
import Projects from "components/Contents/Projects/Projects";
import TechStack from "components/Contents/TechStack/TechStack";
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
          <Projects />
        </div>
      </section>
    </div>
  );
};

export default Body;
