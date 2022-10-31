import { features } from "../constants";
import styles, { layout } from "../style";

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2>
          You do the business,
          <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p></p>
      </div>
    </section>
  );
};

export default Business;
