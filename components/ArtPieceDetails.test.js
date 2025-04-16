import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";

describe("ArtPieceDetails", () => {
  const mockPiece = {
    slug: "starry-night",
    name: "Starry Night",
    artist: "Vincent van Gogh",
    imageSource: "https://example.com/starry-night.jpg",
    year: "1889",
    genre: "Post-Impressionism",
  };

  const mockOnToggleFavorite = jest.fn();

  test("renders all art piece details correctly", () => {
    render(
      <ArtPieceDetails
        piece={mockPiece}
        isFavorite={true}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    // Check if the title is rendered
    expect(screen.getByText(mockPiece.name)).toBeInTheDocument();

    // Check if the image is rendered with correct attributes
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockPiece.imageSource);
    expect(image).toHaveAttribute("alt", mockPiece.name);

    // Check if all details are rendered
    expect(screen.getByText(`Artist: ${mockPiece.artist}`)).toBeInTheDocument();
    expect(screen.getByText(`Year: ${mockPiece.year}`)).toBeInTheDocument();
    expect(screen.getByText(`Genre: ${mockPiece.genre}`)).toBeInTheDocument();
  });

  test("renders favorite button with correct props", () => {
    render(
      <ArtPieceDetails
        piece={mockPiece}
        isFavorite={true}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    // Check if the favorite button is rendered with correct props
    const favoriteButton = screen.getByRole("button");
    expect(favoriteButton).toBeInTheDocument();
  });
});
