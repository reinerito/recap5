import Image from "next/image";
import { getArtPieces, getRandomArtPiece } from "../utils/art";

export default function Spotlight({ artPiece }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Art Gallery</h1>
      <Image
        src={artPiece.imageSource}
        alt={artPiece.name}
        width={400}
        height={400}
      />
      <p>by {artPiece.artist}</p>
    </div>
  );
}

export async function getStaticProps() {
  const pieces = await getArtPieces();
  const artPiece = getRandomArtPiece(pieces);
  return { props: { artPiece } };
}
