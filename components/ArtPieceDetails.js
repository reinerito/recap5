import FavoriteButton from "./FavoriteButton";
import ColorPalette from "./ColorPalette";

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
      <ColorPalette colors={piece.colors} />
      <FavoriteButton
        slug={piece.slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
