import { getTokenFromCookie, verifyToken } from "@/lib/clients/auth";
import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = cookies()
    const accessToken = getTokenFromCookie(cookieStore.toString());

    if (!accessToken) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const token = verifyToken(accessToken);
    console.log(token)
    if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY!, { db: { schema: "gmonlink" } });

    const { data, error } = await supabase.from("projects").select("*, links(*)").eq("user_id", token.userId).order("order", { referencedTable: "links", ascending: false });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 })
}