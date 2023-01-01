import type { PropsWithChildren } from "react";

const ContainerWrapper = (props: PropsWithChildren) => {
  const { children } = props;
  return <div className="h-screen w-full bg-slate-400">{children}</div>;
};

export default ContainerWrapper;
