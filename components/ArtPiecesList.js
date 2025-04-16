import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPiecesList({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview key={piece.slug} piece={piece} />
      ))}
    </div>
  );
}
