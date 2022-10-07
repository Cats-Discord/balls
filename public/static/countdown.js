function updateTime() {
    const today = new Date();
    const DoomsDay = new Date("November 01, 2022");

    let msPerDay = 24 * 60 * 60 * 1000;
    let timeLeft = (DoomsDay.getTime() - today.getTime());
    let e_daysLeft = timeLeft / msPerDay;
    let daysLeft = Math.floor(e_daysLeft);
    let e_hrsLeft = (e_daysLeft - daysLeft) * 24;
    let hrsLeft = Math.floor(e_hrsLeft);
    let minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);

    let timestring = "Only " + daysLeft + " days " + hrsLeft + " hours and " + minsLeft + " minutes left until Hacktoberfest ends :(";
    document.getElementById("cd").innerHTML = timestring;
}

setInterval(updateTime, 100);