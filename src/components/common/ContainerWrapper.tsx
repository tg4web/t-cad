import type { PropsWithChildren } from "react";

const ContainerWrapper = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="mx-auto w-full bg-slate-500 px-4 sm:px-6 lg:px-8 ">
      <div className="mx-auto">{children}</div>
    </div>
  );
};

export default ContainerWrapper;
