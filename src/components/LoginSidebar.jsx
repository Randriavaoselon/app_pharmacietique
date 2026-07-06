import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaTimes, FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import "../style/LoginSidebar.css";

const LoginSidebar = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  return createPortal(
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />
      <div
        className={`login-sidebar ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-sidebar-title"
      >
        <div className="sidebar-header">
          <h3 id="login-sidebar-title">Connexion Admin</h3>
          <button className="close-btn" onClick={onClose} aria-label="Fermer">
            <FaTimes />
          </button>
        </div>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Nom d'utilisateur" required />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Mot de passe" required />
          </div>
          <button type="submit" className="submit-btn">
            Se connecter
          </button>
        </form>
      </div>
    </>,
    document.body
  );
};

export default LoginSidebar;