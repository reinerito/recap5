export async function getArtPieces() {
  const response = await fetch("https://example-apis.vercel.app/api/art");
  const data = await response.json();
  return data;
}

let lastArtPiece = null;

export function getRandomArtPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}
