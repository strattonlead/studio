'use client';

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

const COOKIE_NAME = 'cookie_consent';

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get(COOKIE_NAME);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set(COOKIE_NAME, 'accepted', { expires: 365 }); // Cookie expires in 1 year
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white p-4 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 z-50">
      <p className="text-sm text-center md:text-left">
        Wir verwenden Cookies, um die Funktionalität unserer Website zu gewährleisten und zu verbessern.
      </p>
      <Button
        onClick={handleAccept}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Akzeptieren
      </Button>
    </div>
  );
};

export default CookieConsentBanner;