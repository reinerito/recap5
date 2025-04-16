import { useState, useEffect } from "react";

export default function Spotlight() {
  const [spotlightPiece, setSpotlightPiece] = useState(null);

  useEffect(() => {
    async function fetchAndSelectArtPiece() {
      const response = await fetch("https://example-apis.vercel.app/api/art");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setSpotlightPiece(data[randomIndex]);
    }

    fetchAndSelectArtPiece();
  }, []);

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

export async function getStaticProps() {
  const pieces = await getArtPieces();
  const artPiece = getRandomArtPiece(pieces);
  return { props: { artPiece } };
}
