import { rest } from "msw";
import { filmListMock } from "./filmsMocks";

export const handlers = [
  rest.get(import.meta.env.VITE_API_FILMS_URL, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(filmListMock));
  }),
];

export const handlerError = [
  rest.get(import.meta.env.VITE_API_FILMS_URL, (_req, res, ctx) => {
    return res(ctx.status(404, "The list of films couldn't be loaded"));
  }),
];
