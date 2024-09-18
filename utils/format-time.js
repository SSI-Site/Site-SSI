export const formatTime = (timeString) => {
    const timeParts = timeString.split(':');
    const [hours, minutes] = timeParts;
    
    return `${hours}h${minutes}`;
};