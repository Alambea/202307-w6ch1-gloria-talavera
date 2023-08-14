import { render, screen } from "@testing-library/react";
import NewFilmPage from "./NewFilmPage";

describe("Given a NewFilmPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should show the heading 'Añadir nueva película'", () => {
      const headerText = "Añadir nueva película";

      render(<NewFilmPage />);

      const header = screen.getByRole("heading", { name: headerText });

      expect(header).toBeInTheDocument();
    });
  });
});
