import SimpleCounter from "./SimpleCounter";
import { useEffect, useRef, useState } from "react";
import {
  FiAward,
  FiUsers,
  FiClock,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";
import "../style/Evaluation.css";

const Evaluation = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
          entry.target.classList.add("is-visible");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <FiAward />, title: <SimpleCounter end={25} text='+' isVisible={isVisible} />, desc: "Years of Excellence" },
    { icon: <FiUsers />, title: <SimpleCounter end={15} text='K+' isVisible={isVisible} />, desc: "Happy Patients" },
    { icon: <FiClock />, title: "24/7", desc: "Support Available" },
    { icon: <FiCheckCircle />, title: <SimpleCounter end={100} text='%' isVisible={isVisible} />, desc: "Quality Assured" },
    { icon: <FiGlobe />, title: <SimpleCounter end={50} text='+' isVisible={isVisible} />, desc: "Global Locations" },
  ];

  return (
    <section className="evaluation-section" ref={sectionRef}>
      <div className="evaluation-container-bg">
        <div className="row evaluation-row">
          {stats.map((stat, index) => (
            <div key={index} className="eval-card">
              <div className="icon-side">{stat.icon}</div>
              <div className="text-side">
                <h4>{stat.title}</h4>
                <p>{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
