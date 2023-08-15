import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import useFilmsApi from "../../../hooks/useFilmsApi";
import { Film, FilmsContextStructure } from "../../../types";
import FilmsContext from "./FilmsContext";

const FilmsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [films, setFilms] = useState<Film[]>([]);

  const { getFilms } = useFilmsApi();

  const loadFilms = useCallback(async () => {
    const originFilms = await getFilms();

    setFilms([...originFilms]);
  }, [getFilms]);

  const filmsContextValue = useMemo(
    (): FilmsContextStructure => ({ loadFilms: loadFilms, films: films }),
    [films, loadFilms],
  );

  return (
    <FilmsContext.Provider value={filmsContextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
