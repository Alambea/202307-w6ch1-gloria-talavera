import { useCallback } from "react";
import { Film } from "../types";

const useFilmsApi = () => {
  const apiUrl = import.meta.env.VITE_API_FILMS_URL;

  const getFilms = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);
      const apiFilms = (await response.json()) as Film[];

      return apiFilms;
    } catch {
      throw new Error("The list of films couldn't be loaded");
    }
  }, [apiUrl]);

  return { getFilms };
};

export default useFilmsApi;
