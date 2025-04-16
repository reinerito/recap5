import { getArtPieces, getRandomArtPiece } from "../utils/art";
import FavoriteButton from "../components/FavoriteButton";

export default function Spotlight({ artPiece, favorites, onToggleFavorite }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Art Spotlight</h1>
      {artPiece && (
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
            backgroundColor: favorites.includes(artPiece.slug)
              ? "#fff8dc"
              : "white",
          }}
        >
          <img
            src={artPiece.imageSource}
            alt={artPiece.name}
            style={{
              width: "400px",
              borderRadius: "4px",
            }}
          />
          <h2>{artPiece.name}</h2>
          <p>Artist: {artPiece.artist}</p>
          <FavoriteButton
            slug={artPiece.slug}
            isFavorite={favorites.includes(artPiece.slug)}
            onToggleFavorite={onToggleFavorite}
          />
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
