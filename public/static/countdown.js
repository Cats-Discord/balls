today = new Date();

DoomsDay = new Date("November 01, 2022");

msPerDay = 24 * 60 * 60 * 1000;

timeLeft = (DoomsDay.getTime() - today.getTime());

e_daysLeft = timeLeft / msPerDay;

daysLeft = Math.floor(e_daysLeft);

e_hrsLeft = (e_daysLeft - daysLeft) * 24;

hrsLeft = Math.floor(e_hrsLeft);

minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);

document.write("Only " + daysLeft + " days " + hrsLeft + " hours and " + minsLeft + " minutes left until Hacktoberfest ends :(");