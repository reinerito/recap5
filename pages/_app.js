import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (slug) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(slug)) {
        return currentFavorites.filter((favorite) => favorite !== slug);
      } else {
        return [...currentFavorites, slug];
      }
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        paddingBottom: "80px",
      }}
    >
      <GlobalStyle />
      <Component
        {...pageProps}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
      <Navigation />
    </div>
  );
}
//The main wrapper for the entire application
