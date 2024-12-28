// app/api/github/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const username = url.searchParams.get('username') || 'xanmoy'; // Default to 'xanmoy'

        const res = await fetch(`https://api.github.com/users/${username}/events/public`);
        const data = await res.json();

        if (!res.ok) {
            throw new Error(`GitHub API error: ${data.message}`);
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}
