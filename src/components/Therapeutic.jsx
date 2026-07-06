import { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import "../style/Therapeutic.css";

import img1 from "../assets/coeur.png";
import img2 from "../assets/virus.png";
import img3 from "../assets/cerveau.png";
import img4 from "../assets/suivi.png";
import img5 from "../assets/fois.png";
import img6 from "../assets/bacterie.png";

const Therapeutic = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: "Cardiology",
      description: "Innovative heart treatments.",
      img: img1,
    },
    {
      title: "Virus",
      description: "Innovative heart treatments.",
      img: img2,
    },
    {
      title: "Neuron",
      description: "Innovative heart treatments.",
      img: img3,
    },
    {
      title: "Tester",
      description: "Innovative heart treatments.",
      img: img4,
    },
    {
      title: "Pancreatic",
      description: "Innovative heart treatments.",
      img: img5,
    },
    {
      title: "Bacteries",
      description: "Innovative heart treatments.",
      img: img6,
    },
  ];

  return (
    <section className="therapeutic-section" ref={sectionRef}>
      <div className="container">
        <div className="row therapeutic-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="therapeutic-card"
              onClick={() => {
                console.log("clicked!");
              }}
            >
              <img src={card.img} alt={card.title} />
              <h4 className="content-space">{card.title}</h4>
              <p className="content-space">{card.description}</p>
              <button className="arrow-btn">
                <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Therapeutic;
