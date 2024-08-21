import React, { useEffect, useState } from 'react';
import './ScrollButton.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      id="button"
      className={`scroll-to-top ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
    >
     
    </button>
  );
};

export default ScrollButton;
