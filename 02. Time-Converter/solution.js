function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minuteBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let days =document.getElementById('days');
    let hours =document.getElementById('hours');
    let minutes =document.getElementById('minutes');
    let seconds =document.getElementById('seconds');

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    daysBtn.addEventListener('click', convert)
    hoursBtn.addEventListener('click', convert)
    minuteBtn.addEventListener('click', convert)
    secondsBtn.addEventListener('click', convert)

    function solve(value, unit) {
        let days = value / rations[unit]
        return {
            days: days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds
        }

    }

    function convert(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]')
        let time = solve(Number(input.value), input.id)
        
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}