import Image from "next/image";

export default function ArtPiecePreview({ piece }) {
  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Image
        src={piece.imageSource}
        alt={piece.name}
        width={200}
        height={200}
      />
      <h3 style={{ margin: "10px 0 5px 0" }}>{piece.name}</h3>
      <p style={{ margin: 0 }}>by {piece.artist}</p>
    </div>
  );
}
