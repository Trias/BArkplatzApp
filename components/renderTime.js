export default function renderTime(hours, minutes) {
    return ("" + hours).padStart(2, "0") + ":" + ("" + minutes).padStart(2, "0");
}