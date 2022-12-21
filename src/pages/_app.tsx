import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import ContainerWrapper from "../components/common/ContainerWrapper";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ContainerWrapper>
        <Component {...pageProps} as />
      </ContainerWrapper>
      <ToastContainer />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
