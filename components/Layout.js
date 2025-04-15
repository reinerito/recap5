import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <main style={{ flex: 1 }}>{children}</main>
      <footer
        style={{
          padding: "20px",
          marginTop: "auto",
        }}
      >
        <Navigation />
      </footer>
    </div>
  );
}
