import { ReactNode } from "react";

export type MdxColorProps = {
  children?: ReactNode;
};

export const MdxTitleColor = (props: MdxColorProps) => {
  return <h2 className="text-title">{props.children}</h2>;
};
