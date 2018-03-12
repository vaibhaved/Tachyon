var deadline = new Date("Apr 14, 2018 10:00:00").getTime();
function getTimeRemaining(endtime) {
  var t = new Date().getTime();
  var distance = deadline - t;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    'total': distance,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var distance = getTimeRemaining(endtime);

    daysSpan.innerHTML = distance.days;
    hoursSpan.innerHTML = ('0' + distance.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + distance.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + distance.seconds).slice(-2);

    if (distance.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
initializeClock('clockdiv', deadline);