import { useState, useEffect } from 'react';
import { FaLock } from 'react-icons/fa';
import '../style/AdminButton.css';

const AdminButton = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <button 
      className={`admin-only-btn ${isVisible ? 'show' : ''}`} 
      onClick={onClick}
      aria-label="Accès Administration"
    >
      <FaLock size={18} />
    </button>
  );
};

export default AdminButton;