import { render, screen } from "@testing-library/react";
import FilmsContextProvider from "../../store/films/context/FilmsContextProvider";
import FilmsListPage from "./FilmsListPage";

describe("Given a FilmsListPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should show the heading 'Listado de películas'", () => {
      const headerText = "Listado de películas";

      render(
        <FilmsContextProvider>
          <FilmsListPage />
        </FilmsContextProvider>,
      );

      const heading = screen.getByRole("heading", { name: headerText });

      expect(heading).toBeInTheDocument();
    });
  });
});
