function updateCurrentDayOfTheWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    document.getElementById("dayOfTheWeek").textContent = currentDay;
}

function updateCurrentUTCTime() {
    const currentUTCTime = new Date().getTime();
    document.getElementById("UTCTime").textContent = currentUTCTime + " ms";
}

updateCurrentDayOfTheWeek();
updateCurrentUTCTime();

setInterval(updateCurrentUTCTime, 1000);