import { render, screen } from "@testing-library/react";
import ArtPiecesList from "./ArtPiecesList";

describe("ArtPiecesList", () => {
  const mockPieces = [
    {
      slug: "starry-night",
      name: "Starry Night",
      artist: "Vincent van Gogh",
      imageSource: "https://example.com/starry-night.jpg",
    },
    {
      slug: "mona-lisa",
      name: "Mona Lisa",
      artist: "Leonardo da Vinci",
      imageSource: "https://example.com/mona-lisa.jpg",
    },
  ];

  test("renders all art pieces in the list", () => {
    render(<ArtPiecesList pieces={mockPieces} />);

    // Check if all pieces are rendered
    mockPieces.forEach((piece) => {
      expect(screen.getByText(piece.name)).toBeInTheDocument();
      expect(screen.getByText(`Artist: ${piece.artist}`)).toBeInTheDocument();
    });
  });

  test("renders correct number of art pieces", () => {
    render(<ArtPiecesList pieces={mockPieces} />);

    // Check if we have the correct number of images (one per piece)
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(mockPieces.length);
  });
});
