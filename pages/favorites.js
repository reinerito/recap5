import { useState, useEffect } from "react";
import ArtPiece from "./gallery";

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
