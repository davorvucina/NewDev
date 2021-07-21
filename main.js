
const hoursSpan2 = document.querySelector('.js-hours2');
const minutesSpan2 = document.querySelector('.js-minutes2');
const secondsSpan2 = document.querySelector('.js-seconds2');

const finishTime2 = 155210101014;

function calculateRemainingTime2() {
let currentTime2 = Date.now();
let remainingTime2 = 0;
let hours2 = 0;
let minutes2 = 0;
let seconds2 = 0;
return function calculate2() {
currentTime2 = Date.now()
remainingTime2 = new Date(finishTime2 - currentTime2);
// days = remainingTime.getUTCDate();
hours2 = '1';
minutes2 = remainingTime2.getUTCMinutes();
seconds2 = remainingTime2.getUTCSeconds();
hoursSpan2.innerHTML = hours2 < 10 ? `0${hours2}` : hours2
minutesSpan2.innerHTML = minutes2 < 10 ? `2${minutes2}` : minutes2
secondsSpan2.innerHTML = seconds2 < 10 ? `0${seconds2}` : seconds2
}
}

const calculate2 = calculateRemainingTime2();
setInterval(calculate2, 1000)


const hoursSpan = document.querySelector('.js-hours');
const minutesSpan = document.querySelector('.js-minutes');
const secondsSpan = document.querySelector('.js-seconds');

const finishTime = 155210101014;

function calculateRemainingTime() {
let currentTime = Date.now();
let remainingTime = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
return function calculate() {
currentTime = Date.now()
remainingTime = new Date(finishTime - currentTime);
// days = remainingTime.getUTCDate();
hours = '0';
minutes = remainingTime.getUTCMinutes();
seconds = remainingTime.getUTCSeconds();
hoursSpan.innerHTML = hours < 10 ? `0${hours}` : hours
minutesSpan.innerHTML = minutes < 10 ? `2${minutes}` : minutes
secondsSpan.innerHTML = seconds < 10 ? `0${seconds}` : seconds
}
}

const calculate = calculateRemainingTime();
setInterval(calculate, 1000)


$(document).scroll(function () {
var y = $(this).scrollTop();
if (y > 50) {
$('.info').fadeIn();
} else {
$('.info').fadeOut();
}

}); 


   








