// lib/github.ts
const GITHUB_API_BASE_URL = 'https://api.github.com';

export async function fetchGitHubActivity(username: string, token: string) {
    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    try {
        const response = await fetch(`${GITHUB_API_BASE_URL}/users/${username}/events`, { headers });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.statusText}`);
        }

        const events = await response.json();
        return events.map((event: any) => ({
            id: event.id,
            type: event.type,
            repo: event.repo.name,
            created_at: event.created_at,
            payload: event.payload,
        }));
    } catch (error) {
        throw new Error(`Failed to fetch GitHub activity: ${(error as Error).message}`);
    }
}
