// Import necessary hooks from React
import { useState, useEffect } from "react";
import Link from "next/link";
import FavoriteButton from "../components/FavoriteButton";

// Create a simple ArtPiece component to display each piece
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
        cursor: "pointer",
        backgroundColor: isFavorite ? "#fff8dc" : "white",
      }}
    >
      <Link href={`/art-pieces/${piece.slug}`} passHref>
        <div>
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
        </div>
      </Link>
      <FavoriteButton
        slug={piece.slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}

// Main Gallery component
export default function Gallery({ favorites, onToggleFavorite }) {
  // State to store the art pieces
  const [artPieces, setArtPieces] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    async function fetchArtPieces() {
      const response = await fetch("https://example-apis.vercel.app/api/art");
      const data = await response.json();
      setArtPieces(data);
    }

    fetchArtPieces();
  }, []);

  // Render the gallery
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Art Gallery</h1>
      {artPieces.map((piece) => (
        <ArtPiece
          key={piece.slug}
          piece={piece}
          isFavorite={favorites.includes(piece.slug)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
