// components/App.js

import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogImageUrl(data.message);
      } catch (error) {
        console.error("Error fetching dog image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {dogImageUrl && (
        <img src={dogImageUrl} alt="A Random Dog" style={{ maxWidth: "100%" }} />
      )}
    </div>
  );
};

export default App;
