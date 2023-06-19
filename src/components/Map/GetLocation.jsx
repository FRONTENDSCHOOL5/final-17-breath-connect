import React, { useEffect, useState } from 'react';

const GetLocation = () => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setIsLoading(false);
      } catch (error) {
        console.error('Error getting current location:', error);
        setIsLoading(false);
      }
    };

    getLocation();
  }, []);

  if (isLoading) {
    return <div>Loading location...</div>;
  }

  if (!location) {
    return <div>Failed to retrieve location.</div>;
  }

  return location;
};

export default GetLocation;
