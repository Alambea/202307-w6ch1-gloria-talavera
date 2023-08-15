import { render, screen } from "@testing-library/react";
import { filmListMock } from "../../mocks/filmsMocks";
import FilmsContext from "../../store/films/context/FilmsContext";
import Count from "./Count";

describe("Given a Count component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Listando 4 películas'", () => {
      const loadFilms = vi.fn();
      const expectedTotalFilms = `Listando ${filmListMock.length} películas`;

      render(
        <FilmsContext.Provider value={{ films: filmListMock, loadFilms }}>
          <Count />
        </FilmsContext.Provider>,
      );

      const totalFilms = screen.getByText(expectedTotalFilms);

      expect(totalFilms).toBeInTheDocument();
    });
  });
});
