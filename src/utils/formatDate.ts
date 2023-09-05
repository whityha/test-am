const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
export const formatDate = (date: Date): string => {
    const month = months[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours();
    if(hour > 12) return `${day} ${month}, ${(hour - 12).toString().padStart(2, '0')}:00 AM`
    return `${day} ${month}, ${hour.toString().padStart(2, '0')}:00 PM`
}
