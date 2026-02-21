import { useEffect } from "react";

// Custom hook to initialize Devfolio buttons
// Ensures the Devfolio SDK is loaded and initializes buttons when component mounts

export const useDevfolio = () => {
  useEffect(() => {
    // Initialize Devfolio buttons when component mounts
    const initializeDevfolio = () => {
      if (window.devfolio && window.devfolio.initialize) {
        window.devfolio.initialize();
      }
    };

    // Check if script is already loaded
    if (document.querySelector('script[src*="apply.devfolio.co/v2/sdk.js"]')) {
      // Script is loaded, initialize immediately
      initializeDevfolio();
    } else {
      // Wait for script to load
      const checkScript = setInterval(() => {
        if (window.devfolio && window.devfolio.initialize) {
          initializeDevfolio();
          clearInterval(checkScript);
        }
      }, 100);

      // Cleanup interval after 5 seconds
      setTimeout(() => clearInterval(checkScript), 5000);

      return () => clearInterval(checkScript);
    }
  }, []);
};
