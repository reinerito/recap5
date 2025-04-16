import Link from "next/link";

export default function ArtPiecePreview({ piece }) {
  return (
    <div>
      <Link href={`/art-pieces/${piece.slug}`}>
        <img
          src={piece.imageSource}
          alt={piece.name}
          style={{ width: "200px" }}
        />
        <h3>{piece.name}</h3>
        <p>Artist: {piece.artist}</p>
      </Link>
    </div>
  );
}
