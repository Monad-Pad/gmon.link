"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ProjectTemplate({ children }: { children: React.ReactNode }) {
    const slug = usePathname().split("/").pop();

    useEffect(() => {
        fetch("/api/pageview", {
            method: "POST",
            body: JSON.stringify({ slug }),
        });
    }, [slug]);
    
	return <>{children}</>;
}
