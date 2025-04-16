import Navigation from "./Navigation";

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        borderTop: "1px solid #eaeaea",
        backgroundColor: "#f8f8f8",
        textAlign: "center",
        position: "absolute",
        bottom: 0,
      }}
    >
      <Navigation />
    </div>
  );
}
