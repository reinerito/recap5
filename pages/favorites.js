import { useState, useEffect } from "react";
import FavoriteButton from "../components/FavoriteButton";

function ArtPiece({ piece, isFavorite, onToggleFavorite }) {
  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        margin: "20px",
        maxWidth: "300px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: isFavorite ? "#fff8dc" : "white",
      }}
    >
      <img
        src={piece.imageSource}
        alt={piece.name}
        style={{
          width: "200px",
          borderRadius: "4px",
        }}
      />
      <h3>{piece.name}</h3>
      <p>Artist: {piece.artist}</p>
      <FavoriteButton
        slug={piece.slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}

export default function Favorites({ favorites, onToggleFavorite }) {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    async function fetchArtPieces() {
      const response = await fetch("https://example-apis.vercel.app/api/art");
      const data = await response.json();
      setArtPieces(data);
    }

    fetchArtPieces();
  }, []);

  // Filter to show only favorite pieces
  const favoritePieces = artPieces.filter((piece) =>
    favorites.includes(piece.slug)
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Favorite Art Pieces</h1>
      {favoritePieces.length === 0 ? (
        <p>No favorite art pieces yet. Add some from the Gallery!</p>
      ) : (
        favoritePieces.map((piece) => (
          <ArtPiece
            key={piece.slug}
            piece={piece}
            isFavorite={favorites.includes(piece.slug)}
            onToggleFavorite={onToggleFavorite}
          />
        ))
      )}
    </div>
  );
}
