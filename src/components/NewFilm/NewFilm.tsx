import { useState } from "react";
import { Film } from "../../types";
import Button from "../Button/Button";
import "./NewFilm.css";

const NewFilm = (): React.ReactElement => {
  const [canSubmit] = useState(false);

  const initialFilmData = {
    id: 0,
    title: "",
    poster: "",
    director: "",
    year: 0,
  };

  const [newFilm] = useState<Film>(initialFilmData);

  return (
    <form className="form-film">
      <div className="form-control">
        <label htmlFor="title">Título: </label>
        <input type="text" id="title" value={newFilm.title} />
      </div>
      <div className="form-control">
        <label htmlFor="director">Dirección: </label>
        <input type="text" id="director" value={newFilm.director} />
      </div>
      <div className="form-control">
        <label htmlFor="year">Año: </label>
        <input type="number" id="year" value={newFilm.year} />
      </div>
      <div className="form-control">
        <label htmlFor="poster">URL cartel: </label>
        <input type="url" id="poster" value={newFilm.poster} />
      </div>
      <div className="form-control">
        <Button disabled={!canSubmit}>Crear película</Button>
      </div>
    </form>
  );
};

export default NewFilm;
