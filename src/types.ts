export interface Film {
  id: number;
  title: string;
  poster: string;
  director: string;
  year: number;
}

export interface FilmsContextStructure {
  films: Film[];
  loadFilms: () => Promise<void>;
}
