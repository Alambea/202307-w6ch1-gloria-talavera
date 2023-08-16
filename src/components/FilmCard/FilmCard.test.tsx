import { render, screen } from "@testing-library/react";
import { filmMock } from "../../mocks/filmsMocks";
import FilmCard from "./FilmCard";

describe("Given a FilmCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the heading text 'Viaje a Darjeeling (2007)'", () => {
      const headingText = `${filmMock.title} (${filmMock.year})`;

      render(<FilmCard film={filmMock} />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
