export const API_URL = typeof window === 'undefined' 
    ? process.env.NEXT_SERVER_API_URL || 'http://backend:3000'
    : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    
export async function fetchAPI(endpoint:string, options: RequestInit = {}) {
    const FINAL_URL = new URL(endpoint, API_URL).toString();

    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const response = await fetch(FINAL_URL, {
        cache: 'no-store',
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    });

    if (!response.ok) {
        console.error(`[API ERROR] ${response.status} at endpoint ${endpoint}`);
        throw new Error(`Server Error: ${response.status}`);
    }

    return response.json();
}