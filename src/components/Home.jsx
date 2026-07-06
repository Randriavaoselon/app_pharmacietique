import SimpleCounter from "./SimpleCounter";
import Quality from "./Quality";

import {
  FiArrowRight,
  FiPlayCircle,
  FiShield,
  FiCpu,
  FiGlobe,
  FiTarget,
} from "react-icons/fi";
import "../style/Home.css";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";

const Home = () => {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
  
  return (
    <>
      <section className="home-section">
        <div className="container">
          <div className="row main-hero">
            <div className="col-left">
              <h1 className="fade-in-element delay-1">
                Driven by Science.{" "}
                <span className="highlight">Focused on Life.</span>
              </h1>
              <p className="p fade-in-element delay-2">
                Avenir Pharmaceuticals is committed to discovering, developing,
                and delivering innovative medicines that improve lives around
                the world.
              </p>
              <div
                className="btn-group fade-in-element delay-3"
                style={{ marginBottom: "30px" }}
              >
                <button className="btn-primary">
                  Explore Our Solution{" "}
                  <FiArrowRight style={{ marginLeft: "8px" }} />
                </button>

                <button className="btn-secondary">
                  <FiPlayCircle style={{ marginRight: "8px" }} /> Watch Video
                </button>
              </div>

              <div className="row features-row" style={{ marginTop: "10px" }}>
                <div className="col-cards">
                  {avatars.map((img, index) => (
                    <div key={index} className="card">
                      <img src={img} alt={`User ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <div className="col-stats">
                <h2><SimpleCounter end={75}text='K+' /></h2>
                  <p className="stats-label">
                    <strong>Healthcare Professionals</strong>
                  </p>
                  <p>Trust Us</p>
                </div>
              </div>
            </div>

            <div className="col-right">
              <div className="feature-main-card">
                {[
                  { icon: <FiShield />, title: "Innovative", text: "ReSearch" },
                  { icon: <FiCpu />, title: "Qaulity", text: "Assurance" },
                  { icon: <FiGlobe />, title: "Global", text: "Reach" },
                  { icon: <FiTarget />, title: "Patient", text: "Commitment" },
                ].map((item, index) => (
                  <div key={index} className="sub-card">
                    <div className="icon-box">{item.icon}</div>
                    <div className="text-box">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Quality />
    </>
  );
};

export default Home;
