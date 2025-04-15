export async function getArtPieces() {
  const response = await fetch("https://example-apis.vercel.app/api/art");
  const data = await response.json();
  return data;
}

let lastArtPiece = null;

export function getRandomArtPiece(pieces) {
  if (!pieces || pieces.length === 0) return null;

  let randomPiece;
  do {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    randomPiece = pieces[randomIndex];
  } while (pieces.length > 1 && randomPiece.slug === lastArtPiece?.slug);

  lastArtPiece = randomPiece;
  return randomPiece;
}
