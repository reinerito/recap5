import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { useRouter } from "next/router";

// Mock the useRouter hook
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Navigation", () => {
  // Reset the mock before each test
  beforeEach(() => {
    useRouter.mockReset();
  });

  test("renders all navigation links", () => {
    // Mock the router to return a path
    useRouter.mockImplementation(() => ({
      pathname: "/",
    }));

    render(<Navigation />);

    // Check if all links are present
    expect(screen.getByText("Spotlight")).toBeInTheDocument();
    expect(screen.getByText("Gallery")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();

    // Check if links have correct href attributes
    const spotlightLink = screen.getByText("Spotlight").closest("a");
    const galleryLink = screen.getByText("Gallery").closest("a");
    const favoritesLink = screen.getByText("Favorites").closest("a");

    expect(spotlightLink).toHaveAttribute("href", "/");
    expect(galleryLink).toHaveAttribute("href", "/gallery");
    expect(favoritesLink).toHaveAttribute("href", "/favorites");
  });

  test("highlights current page link", () => {
    // Mock the router to return the gallery path
    useRouter.mockImplementation(() => ({
      pathname: "/gallery",
    }));

    render(<Navigation />);

    // Check if the current page link is highlighted (blue)
    const galleryLink = screen.getByText("Gallery").closest("a");
    expect(galleryLink).toHaveStyle({ color: "blue" });

    // Check if other links are not highlighted (black)
    const spotlightLink = screen.getByText("Spotlight").closest("a");
    const favoritesLink = screen.getByText("Favorites").closest("a");
    expect(spotlightLink).toHaveStyle({ color: "black" });
    expect(favoritesLink).toHaveStyle({ color: "black" });
  });
});
