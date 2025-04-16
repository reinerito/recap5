// Import necessary hooks from React
import { useState, useEffect } from "react";

// Main Spotlight component
export default function Spotlight() {
  // State to store the spotlight art piece
  const [spotlightPiece, setSpotlightPiece] = useState(null);

  // Fetch data and select random piece when component mounts
  useEffect(() => {
    async function fetchAndSelectArtPiece() {
      const response = await fetch("https://example-apis.vercel.app/api/art");
      const data = await response.json();

      // Select random piece
      const randomIndex = Math.floor(Math.random() * data.length);
      setSpotlightPiece(data[randomIndex]);
    }

    fetchAndSelectArtPiece();
  }, []);

  // Render the spotlight
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Art Spotlight</h1>
      {spotlightPiece && (
        <div
          style={{
            textAlign: "center",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            margin: "20px",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <img
            src={spotlightPiece.imageSource}
            alt={spotlightPiece.name}
            style={{
              width: "400px",
              borderRadius: "4px",
            }}
          />
          <h2>{spotlightPiece.name}</h2>
          <p>Artist: {spotlightPiece.artist}</p>
        </div>
      )}
    </div>
  );
}
