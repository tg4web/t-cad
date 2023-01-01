import type { PropsWithChildren } from "react";

const CadWrapper = (props: PropsWithChildren) => {
  const { children } = props;
  return <div className="h-full w-full bg-slate-900">{children}</div>;
};

export default CadWrapper;
