import { render, screen } from "@testing-library/react";
import FilmsListPage from "./FilmsListPage";

describe("Given a FilmsListPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should show the heading 'Listado de películas'", () => {
      const headerText = "Listado de películas";

      render(<FilmsListPage />);

      const heading = screen.getByRole("heading", { name: headerText });

      expect(heading).toBeInTheDocument();
    });
  });
});
