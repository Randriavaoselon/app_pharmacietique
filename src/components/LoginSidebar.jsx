import { useEffect } from "react";
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

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />
      <div className={`login-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Connexion Admin</h3>
          <button className="close-btn" onClick={onClose}>
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
    </>
  );
};

export default LoginSidebar;
