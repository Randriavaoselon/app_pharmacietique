import { useEffect, useRef } from "react";
import { FiMapPin, FiTruck, FiGlobe } from "react-icons/fi";
import "../style/GlobalPresence.css";
import globalImg from "../assets/localisation-image.png";

const GlobalPresence = () => {

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

  const locations = [
    { icon: <FiMapPin />, title: "Strong Distribution", sub: "Network" },
    { icon: <FiTruck />, title: "Regulatory Compliance", sub: "WorldWide" },
    { icon: <FiGlobe />, title: "Trusted by HealthCare", sub: "Professionnals" },
  ];

  return (
    <section className="global-presence" ref={sectionRef}>
      <div className="container">
        <div className="global-presence__wrapper">
          <div className="global-presence__content">
            <h3 className="global-presence__title">Global Presence</h3>
            <p className="global-presence__description">
              Delivering high-quality medicines across the globe. Wherever
              healthcare is needed, we are there.
            </p>

            <div className="location-cards">
              {locations.map((loc, index) => (
                <div key={index} className="location-card">
                  <div className="location-card__icon">{loc.icon}</div>
                  <div className="location-card__info">
                    <h4 className="location-card__title">{loc.title}</h4>
                    <p className="location-card__subtitle">{loc.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="global-presence__visual">
            <img
              src={globalImg}
              alt="Global operations map"
              className="global-presence__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
