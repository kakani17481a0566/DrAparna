import { useState, useEffect } from 'react';
import splashImg from '../assets/bg_2.jpg';

const SplashScreen = () => {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Start fading out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 2000);

    // Remove from DOM completely after fade completes (e.g., 1s transition)
    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black transition-opacity duration-1000 ${
        fade ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img
        src={splashImg}
        alt="Welcome"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SplashScreen;
