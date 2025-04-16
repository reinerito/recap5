import { useState, useEffect } from "react";

export default function FavoriteButton({ slug, isFavorite, onToggleFavorite }) {
  return (
    <button
      onClick={() => onToggleFavorite(slug)}
      style={{
        padding: "8px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        backgroundColor: isFavorite ? "#ffd700" : "white",
        cursor: "pointer",
        fontSize: "20px",
      }}
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}
