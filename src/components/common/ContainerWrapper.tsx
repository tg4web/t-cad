import type { PropsWithChildren } from "react";

const ContainerWrapper = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="h-screen w-full bg-slate-400 px-4 sm:px-6 lg:px-8">
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default ContainerWrapper;
