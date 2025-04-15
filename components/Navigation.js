import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
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
    </>
  );
}
