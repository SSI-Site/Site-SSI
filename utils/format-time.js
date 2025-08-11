export const formatTime = (timeString) => {
    const timeParts = timeString.split('T')[1].split(':');
    const [hours, minutes] = timeParts;
    
    return `${hours}h${minutes}`;
};