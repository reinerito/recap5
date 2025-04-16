import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiece({ piece, isFavorite, onToggleFavorite }) {
  return (
    <div style={{ margin: "20px" }}>
      <Link href={`/art-pieces/${piece.slug}`}>
        <img
          src={piece.imageSource}
          alt={piece.name}
          style={{ width: "200px" }}
        />
        <h3>{piece.name}</h3>
        <p>Artist: {piece.artist}</p>
      </Link>
      <FavoriteButton
        slug={piece.slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
