import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When user writes 'Viaje a Darjeeling','Wes Anderson', 2007, 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/28/56/20350733.jpg'", () => {
    test("Then it should show 'Viaje a Darjeeling','Wes Anderson', 2007, 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/28/56/20350733.jpg'", async () => {
      const titleInputText = "Viaje a Darjeeling";
      const directionInputText = "Wes Anderson";
      const yearInputText = 2007;
      const imageInputText =
        "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/28/56/20350733.jpg";

      render(<NewFilm />);

      const titleTextBox = screen.getByRole("textbox", {
        name: /título:/i,
      }) as HTMLInputElement;
      const directionTextBox = screen.getByRole("textbox", {
        name: /dirección:/i,
      }) as HTMLInputElement;
      const yearTextBox = screen.getByRole("spinbutton", {
        name: /año/i,
      }) as HTMLInputElement;
      const urlTextBox = screen.getByRole("textbox", {
        name: /url cartel/i,
      }) as HTMLInputElement;

      await userEvent.type(titleTextBox, titleInputText);
      await userEvent.type(directionTextBox, directionInputText);
      await userEvent.type(yearTextBox, yearInputText.toString());
      await userEvent.type(urlTextBox, imageInputText);

      expect(titleTextBox.value).toBe(titleInputText);
      expect(directionTextBox.value).toBe(directionInputText);
      expect(yearTextBox.value).toBe(yearInputText.toString());
      expect(urlTextBox.value).toBe(imageInputText);
    });
  });
});
