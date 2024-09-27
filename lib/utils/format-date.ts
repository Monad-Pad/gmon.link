export function formatPostgresDate(date: string) {
    const parsedDate = new Date(date);
    
    // Format the date as desired (e.g., "August 20, 2024")
    return parsedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}