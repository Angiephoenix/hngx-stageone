function updateCurrentDayOfTheWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    document.getElementById("currentDayOfTheWeek").textContent = currentDay;
}

function updateCurrentUTCTime() {
    const currentUTCTime = new Date().getTime();
    document.getElementById("currentUTCTime").textContent = currentUTCTime + " ms";
}

// Update current day and time on page load
updateCurrentDayOfTheWeek();
updateCurrentUTCTime();

// Update current time every second
setInterval(updateCurrentUTCTime, 1000);