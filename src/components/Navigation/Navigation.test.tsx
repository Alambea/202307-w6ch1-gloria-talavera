import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the links 'Listado de películas' and 'Añadir película'", () => {
      const navFilmsListText = "Listado de películas";
      const navAddListText = "Añadir película";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const navLinkFilmsList = screen.getByRole("link", {
        name: navFilmsListText,
      });
      const navLinkAddList = screen.getByRole("link", { name: navAddListText });

      expect(navLinkFilmsList).toBeInTheDocument();
      expect(navLinkAddList).toBeInTheDocument();
    });
  });
});
