import { getArtPieces, getRandomArtPiece } from "../utils/art";

export default function Spotlight({ artPiece }) {
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
