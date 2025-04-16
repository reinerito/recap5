import Link from "next/link";

export default function Navigation() {
  return (
    <footer
      style={{
        padding: "20px",
        borderTop: "1px solid #ddd",
        marginTop: "20px",
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <Link href="/" passHref style={{ marginRight: "20px" }}>
        Spotlight
      </Link>
      <Link href="/gallery" passHref>
        Gallery
      </Link>
    </footer>
  );
}
