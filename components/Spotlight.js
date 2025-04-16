export default function Spotlight({ image, artist }) {
  return (
    <div>
      <h2>Spotlight</h2>
      <img src={image} alt="Spotlight piece" style={{ width: "300px" }} />
      <p>Artist: {artist}</p>
    </div>
  );
}
