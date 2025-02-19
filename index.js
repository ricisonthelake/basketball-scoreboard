let homeScore = 0;
let guestScore = 0;

document.getElementById("homePoints.textContent").textContent = homeScore;
document.getElementById("guestPoints.textContent").textContent = guestScore;

function addOneToHome() {
    homeScore = homeScore + 1;
    homePoints.textContent = homeScore;
}
function addTwoToHome() {
    homeScore = homeScore + 2;
    homePoints.textContent = homeScore;
}
function addThreeToHome() {
    homeScore = homeScore + 3;
    homePoints.textContent = homeScore;
}
function addOneToGuest() {
    guestScore = guestScore + 1;
    guestPoints.textContent = guestScore;
}
function addTwoToGuest() {
    guestScore = guestScore + 2;
    guestPoints.textContent = guestScore;
}
function addThreeToGuest() {
    guestScore = guestScore + 3;
    guestPoints.textContent = guestScore;
}