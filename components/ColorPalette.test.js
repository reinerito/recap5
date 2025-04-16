import { render, screen } from "@testing-library/react";
import ColorPalette from "./ColorPalette";

describe("ColorPalette", () => {
  const mockColors = ["#ff0000", "#00ff00", "#0000ff"];

  test("renders all colors in the palette", () => {
    render(<ColorPalette colors={mockColors} />);

    // Check if the title is rendered
    expect(screen.getByText("Color Palette")).toBeInTheDocument();

    // Check if all color circles are rendered
    const colorCircles = screen.getAllByTitle(/#[0-9a-f]{6}/i);
    expect(colorCircles).toHaveLength(mockColors.length);

    // Check if each color is rendered with the correct background color
    mockColors.forEach((color) => {
      const circle = screen.getByTitle(color);
      expect(circle).toHaveStyle({ backgroundColor: color });
    });
  });
});
