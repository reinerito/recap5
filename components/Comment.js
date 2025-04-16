export default function Comment({ text, date }) {
  return (
    <div
      style={{ margin: "10px 0", padding: "10px", border: "1px solid #ddd" }}
    >
      <p>{text}</p>
      <small>{new Date(date).toLocaleString()}</small>
    </div>
  );
}
