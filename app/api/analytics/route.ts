import { NextRequest, NextResponse } from 'next/server';
import { supabaseApiClient } from "@/lib/clients/supabase";
import { formatPostgresDate } from "@/lib/utils/format-date";

export async function GET(req: NextRequest) {
    const slug = req.nextUrl.searchParams.get('slug');

    if (!slug) {
        return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    const { data, error } = await supabaseApiClient
        .rpc('get_pageviews_by_6hours', { slug_param: slug })
        .select('*');

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const formattedData = data.map((item: any) => ({
        hour: formatPostgresDate(item.interval_start),
        pageviews: item.pageviews
    }));

    // console.log(formattedData);

    return NextResponse.json(formattedData);
}