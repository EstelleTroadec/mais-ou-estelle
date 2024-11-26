import { ReactNode } from "react";

export type MdxColorProps = {
  children?: ReactNode;
};

export const MdxTitle = (props: MdxColorProps) => {
  return <h2 className="font-poppins uppercase text-title">{props.children}</h2>;
};
