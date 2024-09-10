import { supabaseApiClient } from "@/lib/clients/supabase";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    const { data, error } = await supabaseApiClient.from("projects").select("title, slug, description, avatar_url").eq("is_verified", true).order("created_at", { ascending: false }).limit(9);

    if (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
}