import { router } from "../trpc";
import { authRouter } from "./auth";
import { getRouter } from "./get";
import { usersRouter } from "./users";

export const appRouter = router({
  auth: authRouter,
  get: getRouter,
  users: usersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
