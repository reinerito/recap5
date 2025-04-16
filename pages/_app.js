import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
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
      <Component {...pageProps} />
      <Navigation />
    </div>
  );
}
//The main wrapper for the entire application
