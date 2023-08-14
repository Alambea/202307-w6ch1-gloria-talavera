import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the title 'Películas'", () => {
      const title = "Películas";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const headerElement = screen.getByRole("heading", { name: title });

      expect(headerElement).toBeInTheDocument();
    });
  });
});
