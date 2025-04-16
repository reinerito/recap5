import { useState, useEffect } from "react";
import FavoriteButton from "../components/FavoriteButton";

export default function Spotlight({
  initialArtPieces,
  favorites,
  onToggleFavorite,
}) {
  const [artPieces, setArtPieces] = useState(initialArtPieces);
  const [currentArtPiece, setCurrentArtPiece] = useState(null);

  useEffect(() => {
    // Set initial random piece
    setCurrentArtPiece(getRandomArtPiece(artPieces));
  }, [artPieces]);

  function getRandomArtPiece(pieces) {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    return pieces[randomIndex];
  }

  function handleRefresh() {
    setCurrentArtPiece(getRandomArtPiece(artPieces));
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Art Spotlight</h1>
      <button
        onClick={handleRefresh}
        style={{ margin: "20px", padding: "10px" }}
      >
        Show Another Piece
      </button>
      {currentArtPiece && (
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
            backgroundColor: favorites.includes(currentArtPiece.slug)
              ? "#fff8dc"
              : "white",
          }}
        >
          <img
            src={currentArtPiece.imageSource}
            alt={currentArtPiece.name}
            style={{
              width: "400px",
              borderRadius: "4px",
            }}
          />
          <h2>{currentArtPiece.name}</h2>
          <p>Artist: {currentArtPiece.artist}</p>
          <FavoriteButton
            slug={currentArtPiece.slug}
            isFavorite={favorites.includes(currentArtPiece.slug)}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://example-apis.vercel.app/api/art");
  const initialArtPieces = await response.json();
  return { props: { initialArtPieces } };
}
