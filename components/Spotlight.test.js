import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

describe("Spotlight", () => {
  test("renders spotlight image and artist", () => {
    render(
      <Spotlight
        image="https://example.com/image.jpg"
        artist="Vincent van Gogh"
      />
    );

    // Check if the image is rendered
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
    expect(image).toHaveAttribute("alt", "Spotlight piece");

    // Check if the artist name is rendered
    expect(screen.getByText("Artist: Vincent van Gogh")).toBeInTheDocument();
  });

  test("renders spotlight title", () => {
    render(
      <Spotlight
        image="https://example.com/image.jpg"
        artist="Vincent van Gogh"
      />
    );

    // Check if the title is rendered
    expect(screen.getByText("Spotlight")).toBeInTheDocument();
  });
});
