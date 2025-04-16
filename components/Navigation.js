import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const currentPath = router.pathname;

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
      <Link
        href="/"
        passHref
        style={{
          marginRight: "20px",
          color: currentPath === "/" ? "blue" : "black",
          textDecoration: "none",
        }}
      >
        Spotlight
      </Link>
      <Link
        href="/gallery"
        passHref
        style={{
          color: currentPath === "/gallery" ? "blue" : "black",
          textDecoration: "none",
        }}
      >
        Gallery
      </Link>
    </footer>
  );
}
