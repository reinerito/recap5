import { useEffect, useState } from "react";
import ArtPiecePreview from "../components/ArtPiecePreview";
import { getArtPieces } from "../utils/art";
import Layout from "../components/Layout";

export default function Gallery() {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    async function loadArt() {
      const pieces = await getArtPieces();
      setArtPieces(pieces);
    }
    loadArt();
  }, []);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {artPieces.map((piece) => (
          <ArtPiecePreview key={piece.slug} piece={piece} />
        ))}
      </div>
    </Layout>
  );
}
