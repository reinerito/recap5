import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

describe("ArtPiecePreview", () => {
  const mockPiece = {
    slug: "starry-night",
    name: "Starry Night",
    artist: "Vincent van Gogh",
    imageSource: "https://example.com/starry-night.jpg",
  };

  test("renders art piece details correctly", () => {
    render(<ArtPiecePreview piece={mockPiece} />);

    // Check if the image is rendered with correct attributes
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockPiece.imageSource);
    expect(image).toHaveAttribute("alt", mockPiece.name);

    // Check if the title and artist are rendered
    expect(screen.getByText(mockPiece.name)).toBeInTheDocument();
    expect(screen.getByText(`Artist: ${mockPiece.artist}`)).toBeInTheDocument();
  });

  test("contains a link to the art piece detail page", () => {
    render(<ArtPiecePreview piece={mockPiece} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/art-pieces/${mockPiece.slug}`);
  });
});
