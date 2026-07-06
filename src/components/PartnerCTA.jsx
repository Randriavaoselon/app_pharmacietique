import { FiArrowRight } from "react-icons/fi";
import "../style/PartnerCTA.css";

const PartnerCTA = () => {
  return (
    <section className="partner-cta">
      <div className="partner-cta__container">
        <div className="partner-cta__row">
          <div className="partner-cta__content">
            <h2 className="partner-cta__title">Let's Build a Healthier World Together</h2>
            <p className="partner-cta__description">
              Partner with us to bring innovative healthcare solutions <br />
              to more people, everywhere.
            </p>
          </div>

          <div className="partner-cta__action">
            <button className="partner-cta__button">
              Partner With Us <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;