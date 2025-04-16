import { useState } from "react";

export default function CommentForm({ onSubmit }) {
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment("");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment..."
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </form>
  );
}
