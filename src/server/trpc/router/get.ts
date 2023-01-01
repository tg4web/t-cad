import { protectedProcedure, router } from "../trpc";

export const getRouter = router({
  users: protectedProcedure.query(async ({ ctx }) => {
    const { prisma } = ctx;
    const users = await prisma.user.findMany();

    if (users) {
      return users;
    }
    return [];
  }),
});
