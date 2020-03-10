export function calculatePrice(hour, minute) {
    hour = parseInt(hour);
    minute = parseInt(minute);
    let partialHour = Math.ceil(minute / 60);
    return hour < 4 ? (hour + partialHour) * 1.50 : 5.5;
}