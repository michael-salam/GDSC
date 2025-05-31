export const formatDate = (timestamp: number): string => {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - timestamp;
    const diffInMinutes = Math.floor(diffInMilliseconds / 60000);

    if (diffInMinutes < 1) return 'just now';
    if (diffInMinutes === 1) return '1 minute ago';
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    if (diffInMinutes < 10080) return `${Math.floor(diffInMinutes / 1440)} days ago`;
    return `${Math.floor(diffInMinutes / 10080)} weeks ago`;
}