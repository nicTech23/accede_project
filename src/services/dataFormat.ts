/**
 * Converts an ISO date string to a formatted date string in the format "Month DaySuffix".
 *
 * @param dateString - The ISO date string to convert (e.g., "2024-01-04T00:52:58.601Z").
 * @returns A formatted date string (e.g., "January 4th").
 */
function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const day = date.getUTCDate();
    const month = monthNames[date.getUTCMonth()];

    /**
     * Returns the appropriate suffix for the given day.
     *
     * @param day - The day of the month.
     * @returns The suffix for the day (e.g., "st", "nd", "rd", "th").
     */
    const daySuffix = (day: number): string => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    return `${month} ${day}${daySuffix(day)}`;
}

export default formatDate

