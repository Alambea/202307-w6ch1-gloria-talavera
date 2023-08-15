import { Film } from "../../../types";

export interface FilmsContextStructure {
  films: Film[];
  loadFilms: () => Promise<void>;
}
