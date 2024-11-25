import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";
import { MDX_COMPONENTS } from "./mdx-components";
export const Mdx = ({ children }: { children: string }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MDXRemote
                source={children}
                components={MDX_COMPONENTS}
            />
        </Suspense>
    );
};