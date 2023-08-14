import { PropsWithChildren, useState } from "react";
import { Film } from "../../../types";
import FilmsContext from "./FilmsContext";

const FilmsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [films] = useState<Film[]>([]);

  return (
    <FilmsContext.Provider value={{ films }}>{children}</FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
