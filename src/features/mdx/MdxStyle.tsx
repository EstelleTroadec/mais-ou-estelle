import { ReactNode } from "react";

export type MdxColorProps = {
  children?: ReactNode;
};

export const MdxTitle = (props: MdxColorProps) => {
  return <h2 className="font-poppins uppercase text-title">{props.children}</h2>;
};

export const MdxSubTitle = (props: MdxColorProps) => {
  return <h3 className="font-poppins uppercase text-subtitle">{props.children}</h3>;
};
