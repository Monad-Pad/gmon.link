import { NextResponse } from "next/server";
import { supabaseApiClient } from "@/lib/clients/supabase";

export async function POST(req: Request) {
	const { slug } = await req.json();
    
    const { error } = await supabaseApiClient.from("analytics").insert({ slug, type: "pageview" });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
}