import Link from "next/link";

export default function ArtPiecePreview({ piece }) {
  return (
    <div>
      <Link href={`/art-pieces/${piece.slug}`}>
        <img src={piece.imageSource} alt={piece.name} />
        <h2>{piece.name}</h2>
        <p>Artist: {piece.artist}</p>
      </Link>
    </div>
  );
}
