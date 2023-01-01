import { router, protectedProcedure } from "../trpc";

export const authRouter = router({
  getDbUser: protectedProcedure.query(async ({ ctx }) => {
    const { session, prisma } = ctx;

    const reqUser = session?.user;

    const user = await prisma.user.findUnique({
      where: {
        id: reqUser?.id,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }),
});
