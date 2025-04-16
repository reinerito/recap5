export default function ColorPalette({ colors }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Color Palette</h3>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: color,
            }}
          />
        ))}
      </div>
    </div>
  );
}
