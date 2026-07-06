import { useEffect, useRef } from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import "../style/Innovation.css";
import innovationImg from "../assets/innovation.png";

const Innovation = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    "Advanced Clinical Research",
    "Cutting-edge Technology",
    "Global Medical Partnerships",
  ];

  return (
    <section className="innovation-section" ref={sectionRef}>
      <div className="container">
        <div className="innovation-row">
          <div className="col-left">
            <img
              src={innovationImg}
              alt="R&D Innovation"
              className="innovation-img"
            />
          </div>

          <div className="col-right-innovation">
            <div className="content-header">
              <h4 className="title-innovation">
                Research. Innovation. <br />
                <span className="text-highlight">Better T</span>omorrow.
              </h4>
              <p className="main-desc">
                Our state-of-the-art R&D centers are dedicated to discovering
                new possibilities and delivering innovative therapies for a
                healthier future.
              </p>
              <div className="innovation-features">
                {features.map((item, index) => (
                  <div key={index} className="feature-item">
                    <div className="icon-circle">
                      <FiCheck />
                    </div>
                    <p className="feature-text">{item}</p>
                  </div>
                ))}
              </div>
              <button className="btn-learn-more">
                Learn more about R&D <FiArrowRight className="btn-arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
