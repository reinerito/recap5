import FavoriteButton from "./FavoriteButton";

export default function ArtPieceDetails({
  piece,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <h1>{piece.name}</h1>
      <img
        src={piece.imageSource}
        alt={piece.name}
        style={{ width: "400px" }}
      />
      <p>Artist: {piece.artist}</p>
      <p>Year: {piece.year}</p>
      <p>Genre: {piece.genre}</p>
      <FavoriteButton
        slug={piece.slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
