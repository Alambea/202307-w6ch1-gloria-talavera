import { render, screen } from "@testing-library/react";
import NewFilm from "./NewFilm";

describe("Given a NewFilm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Título:', 'Dirección:', 'Año:' and 'URL cartel:' fields", () => {
      const titleInputText = "Título:";
      const directionInputText = "Dirección:";
      const yearInputText = "Año:";
      const imageInputText = "URL cartel:";

      render(<NewFilm />);

      const titleInput = screen.getByLabelText(titleInputText);
      const directionInput = screen.getByLabelText(directionInputText);
      const yearInput = screen.getByLabelText(yearInputText);
      const imageInput = screen.getByLabelText(imageInputText);

      expect(titleInput).toBeInTheDocument();
      expect(directionInput).toBeInTheDocument();
      expect(yearInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
    });
  });
});
