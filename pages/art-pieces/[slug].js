import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import FavoriteButton from "../../components/FavoriteButton";
import ColorPalette from "../../components/ColorPalette";
import Comment from "../../components/Comment";
import CommentForm from "../../components/CommentForm";

export default function ArtPieceDetails({ favorites, onToggleFavorite }) {
  const router = useRouter();
  const { slug } = router.query;
  const [piece, setPiece] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchArtPiece() {
      const response = await fetch("https://example-apis.vercel.app/api/art");
      const data = await response.json();
      const selectedPiece = data.find((p) => p.slug === slug);
      setPiece(selectedPiece);
    }

    if (slug) {
      fetchArtPiece();
      // Load comments from localStorage
      const savedComments = localStorage.getItem(`comments-${slug}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    }
  }, [slug]);

  function handleAddComment(text) {
    const newComment = {
      text,
      date: new Date().toISOString(),
    };
    const newComments = [...comments, newComment];
    setComments(newComments);
    // Save comments to localStorage
    localStorage.setItem(`comments-${slug}`, JSON.stringify(newComments));
  }

  if (!piece) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "20px",
          margin: "20px",
          maxWidth: "500px",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: favorites.includes(piece.slug) ? "#fff8dc" : "white",
        }}
      >
        <img
          src={piece.imageSource}
          alt={piece.name}
          style={{
            width: "400px",
            borderRadius: "4px",
          }}
        />
        <h2>{piece.name}</h2>
        <p>Artist: {piece.artist}</p>
        <p>Year: {piece.year}</p>
        <p>Genre: {piece.genre}</p>
        <ColorPalette colors={piece.colors} />
        <FavoriteButton
          slug={piece.slug}
          isFavorite={favorites.includes(piece.slug)}
          onToggleFavorite={onToggleFavorite}
        />

        <div style={{ marginTop: "20px" }}>
          <h3>Comments</h3>
          <CommentForm onSubmit={handleAddComment} />
          {comments.map((comment, index) => (
            <Comment key={index} text={comment.text} date={comment.date} />
          ))}
        </div>

        <Link href="/gallery" passHref>
          <button
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            Back to Gallery
          </button>
        </Link>
      </div>
    </div>
  );
}
