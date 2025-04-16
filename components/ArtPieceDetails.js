import FavoriteButton from "./FavoriteButton";

export default function ArtPieceDetails({
  piece,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <img src={piece.imageSource} alt={piece.name} />
      <h1>{piece.name}</h1>
      <p>Artist: {piece.artist}</p>
      <p>Year: {piece.year}</p>
      <p>Genre: {piece.genre}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
