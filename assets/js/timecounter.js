/*
 * Basic Count Up from Date and Time
 * Original Author: @mrwigster / https://guwii.com/bytes/count-date-time-javascript/
 * Remade by @Nekopi / https://github.com/nek0pi
 */
window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("Jan 1, 2020 12:00:00", "countup1"); // ****** Change this line!
  };
function countUpFromTime(countFrom, id) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
    countFrom = new Date(countFrom),
    timeDifference = Math.abs(now - countFrom),
    diffDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)),
    diffHours = diffDays * 24;
  
  let formattedHours = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(diffHours);
  var idEl = document.getElementById(id);
  idEl.getElementsByClassName('hours')[0].innerHTML = formattedHours;
}
