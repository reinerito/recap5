export async function getArtPieces() {
  const response = await fetch("https://example-apis.vercel.app/api/art");
  return response.json();
}

let lastArtPiece = null;

export function getRandomArtPiece(artPieces) {
  let randomPiece;
  do {
    randomPiece = artPieces[Math.floor(Math.random() * artPieces.length)];
  } while (randomPiece === lastArtPiece && artPieces.length > 1);

  lastArtPiece = randomPiece;
  return randomPiece;
}
