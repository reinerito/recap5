import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div style={{ flex: 1 }}>{children}</div>
      <div
        style={{
          padding: "20px",
          borderTop: "1px solid #eaeaea",
          backgroundColor: "#f8f8f8",
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Navigation />
      </div>
    </div>
  );
}
