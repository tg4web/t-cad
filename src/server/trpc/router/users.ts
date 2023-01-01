import { protectedProcedure, router } from "../trpc";
import { z } from "zod";

export const usersRouter = router({
  remove: protectedProcedure
    .input(
      z.object({
        UserId: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      const { prisma } = ctx;

      const user = prisma.user.delete({
        where: {
          id: input.UserId,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    }),
  promote: protectedProcedure
    .input(
      z.object({
        UserId: z.string(),
        Role: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      const { prisma } = ctx;

      const user = prisma.user.update({
        select: {
          role: true,
        },
        data: {
          role: input.Role,
        },
        where: {
          id: input.UserId,
        },
      });

      return user;
    }),
});
