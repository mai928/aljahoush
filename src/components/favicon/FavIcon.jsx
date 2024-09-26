import React, { useEffect } from 'react';

const FavIcin = () => {
  useEffect(() => {
    // Function to fetch the icon URL from the API
    const fetchIcon = async () => {
      try {
        const response = await fetch('https://your-api-endpoint.com/icon');
        const data = await response.json();

        // Assuming the API returns a URL to the icon
        const iconUrl = data.iconUrl;

        // Update the favicon
        const favicon = document.getElementById('favicon');
        if (favicon) {
          favicon.href = iconUrl;
        } else {
          // Create a new favicon element if it doesn't exist
          const newFavicon = document.createElement('link');
          newFavicon.id = 'favicon';
          newFavicon.rel = 'icon';
          newFavicon.href = iconUrl;
          document.head.appendChild(newFavicon);
        }
      } catch (error) {
        console.error('Error fetching the icon:', error);
      }
    };

    fetchIcon();
  }, []);

  return (
    <div>
      <h1>Dynamic Favicon in Vite React</h1>
    </div>
  );
};

export default FavIcin;
