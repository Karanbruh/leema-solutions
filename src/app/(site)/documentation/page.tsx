import { Documentation } from "@/app/components/documentation/Documentation";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Documentation | Leema Solutions",
};

export default function Page() {
    return (
        <>
        <Documentation/>
        </>
    );
};
