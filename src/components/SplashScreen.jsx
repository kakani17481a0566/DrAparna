import { useState, useEffect } from 'react';
import splashImg from '../assets/bg_2.jpg';

import img1 from '../assets/Aperna.png';
import img2 from '../assets/logo.png';
import img3 from '../assets/mission_image.png';
import img4 from '../assets/no_more_illiteracy_2.jpg';
import img5 from '../assets/our_mission.jpg';
import img6 from '../assets/vision_image.png';

const resourcesToCache = [
  { id: 'img_aperna', url: img1 },
  { id: 'img_logo', url: img2 },
  { id: 'img_mission', url: img3 },
  { id: 'img_illiteracy', url: img4 },
  { id: 'img_our_mission', url: img5 },
  { id: 'img_vision', url: img6 }
];

const SplashScreen = () => {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Process to download and cache resources to sessionStorage
    const preloadResources = async () => {
      for (const res of resourcesToCache) {
        // Skip if already stored
        if (sessionStorage.getItem(res.id)) continue;
        
        try {
          const response = await fetch(res.url);
          const blob = await response.blob();
          const reader = new FileReader();
          
          reader.onloadend = () => {
            const base64data = reader.result;
            try {
              sessionStorage.setItem(res.id, base64data);
            } catch (e) {
              console.warn(`SessionStorage quota exceeded for ${res.id} or other error:`, e);
            }
          };
          
          reader.readAsDataURL(blob);
        } catch (err) {
          console.error('Failed to download resource:', res.id, err);
        }
      }
      sessionStorage.setItem('all_resources_download_attempted', 'true');
    };

    preloadResources();

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
