import React from "react";
import styles from "./style";

export const App = () => {
  return (
    <div className="bg-primary	w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>Navbar</div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
        stats business billing cardDeal testimonials clients create footer
      </div>
    </div>
  );
};

export default App;
