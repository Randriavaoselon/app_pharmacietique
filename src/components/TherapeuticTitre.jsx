import { FiArrowRight } from "react-icons/fi";

import "../style/TherapeuticTitre.css";

const TherapeuticTitre = () => {
  return (
    <>
      <section className="therapeutic-section">
        <div className="container">
          <div className="row therapeutic-row">
            <div className="col-left">
              <h3>
                <span className="highlight-line">The</span>rapeutic Areas
              </h3>
            </div>
            <div className="col-right-therapeuticTitre">
              <a href="/all-areas" className="view-all-link">
                View All Areas <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TherapeuticTitre;
