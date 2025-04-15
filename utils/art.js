export async function getArtPieces() {
  const response = await fetch("https://example-apis.vercel.app/api/art");
  const data = await response.json();
  return data;
}
