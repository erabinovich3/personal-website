import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { strict as assert } from "assert";

const CONTENTFUL_REVALIDATE_SECRET = process.env.CONTENTFUL_REVALIDATE_SECRET;

assert(CONTENTFUL_REVALIDATE_SECRET);

export async function POST(request: Request) {
    const requestHeaders = new Headers(request.headers);
    const secret = requestHeaders.get("x-vercel-reval-key");

    if (secret !== CONTENTFUL_REVALIDATE_SECRET) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    revalidatePath("/projects");

    return NextResponse.json({ revalidated: true, now: Date.now() });
}
