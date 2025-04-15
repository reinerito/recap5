import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Link
        href="/"
        style={{
          color: currentPath === "/" ? "blue" : "black",
          textDecoration: "none",
        }}
      >
        Spotlight
      </Link>
      <Link
        href="/gallery"
        style={{
          color: currentPath === "/gallery" ? "blue" : "black",
          textDecoration: "none",
        }}
      >
        Gallery
      </Link>
    </nav>
  );
}
