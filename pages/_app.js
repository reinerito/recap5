import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <main style={{ paddingBottom: "80px" }}>
        <Component {...pageProps} />
      </main>
      <Navigation />
    </>
  );
}
//The main wrapper for the entire application
