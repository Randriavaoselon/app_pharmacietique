import { useEffect, useRef } from "react";
import {
  FiAward,
  FiShield,
  FiClock,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import "../style/Quality.css";

const Quality = () => {
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

  const data = [
    {
      icon: <FiAward />,
      title: "Excellence",
      text: "Standards de qualité élevés.",
    },
    {
      icon: <FiShield />,
      title: "Fiabilité",
      text: "Sécurité garantie à 100%.",
    },
    {
      icon: <FiClock />,
      title: "Disponibilité",
      text: "Support technique 24/7.",
    },
    {
      icon: <FiSettings />,
      title: "Innovation",
      text: "Technologie de pointe.",
    },
    { icon: <FiUsers />, title: "Expertise", text: "Une équipe qualifiée." },
  ];

  return (
    <section className="quality-section" ref={sectionRef}>
      <div className="container">
        <div className="row quality-row">
          {data.map((item, index) => (
            <div key={index} className="quality-card">
              <div className="icon-wrapper">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
