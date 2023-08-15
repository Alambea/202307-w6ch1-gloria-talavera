import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import useFilmsApi from "../../../hooks/useFilmsApi";
import { Film } from "../../../types";
import FilmsContext from "./FilmsContext";
import { FilmsContextStructure } from "./types";

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
    (): FilmsContextStructure => ({ loadFilms, films }),
    [films, loadFilms],
  );

  return (
    <FilmsContext.Provider value={filmsContextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
