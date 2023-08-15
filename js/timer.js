// Set the date and time for the countdown
const countdownDate = new Date("2023-12-31T12:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const timeRemaining = countdownDate - now;

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown timer
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

    // If the countdown is over, clear the interval
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML = "The site is now ready!";
    }
}, 1000);