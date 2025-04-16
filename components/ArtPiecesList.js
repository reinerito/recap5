import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPiecesList({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview piece={piece} />
        </li>
      ))}
    </ul>
  );
}
