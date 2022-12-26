import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.cookies;
  const sessionCookie = cookies["next-auth.session-token"];
  const session = await getSession({ req: context.req });

  console.log("session", session);
  if (context.req.url !== "/") {
    if (!sessionCookie && !session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }
  if (context.req.url === "/") {
    if (sessionCookie && session) {
      return {
        redirect: {
          destination: "/profile/" + session.user?.id,
          permanent: false,
        },
      };
    }
  }
  if (session && sessionCookie) {
    return { props: {} };
  }

  return { props: {} };
};
