import { render, screen } from "@testing-library/react";
import { filmListMock } from "../../mocks/filmsMocks";
import FilmsContext from "../../store/films/context/FilmsContext";
import FilmsList from "./FilmsList";

describe("Given a FilmsList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of film cards", async () => {
      const loadFilms = vi.fn();
      const listLength = filmListMock.length;

      render(
        <FilmsContext.Provider value={{ films: filmListMock, loadFilms }}>
          <FilmsList />
        </FilmsContext.Provider>,
      );

      const listItems = screen.getAllByRole("listitem");

      expect(listItems.length).toBe(listLength);
    });
  });
});
