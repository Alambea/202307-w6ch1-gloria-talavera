import { renderHook } from "@testing-library/react";
import { describe, test } from "vitest";
import { filmListMock } from "../mocks/filmsMocks";
import { handlerError } from "../mocks/handlers";
import { server } from "../mocks/server";
import useFilmsApi from "./useFilmsApi";

describe("Given an useFilmsApi custom hook", () => {
  describe("When it calls to the getFilms function", () => {
    test("Then it should return a list of films", async () => {
      const {
        result: {
          current: { getFilms },
        },
      } = renderHook(() => useFilmsApi());

      const listFilms = await getFilms();

      expect(listFilms).toStrictEqual(filmListMock);
    });
  });

  test("Then it should throw an error when the response fail to load the list of films", () => {
    server.resetHandlers(...handlerError);
    const expectedError = "The list of films couldn't be loaded";

    const {
      result: {
        current: { getFilms },
      },
    } = renderHook(() => useFilmsApi());

    const listFilms = getFilms();

    expect(listFilms).rejects.toThrowError(expectedError);
  });
});
