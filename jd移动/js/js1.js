var oHours = document.getElementById("Hours")
var oMinutes = document.getElementById("Minutes")
var oSeconds = document.getElementById("")

function fn() {
    var LDate = new Date()
    var endTimes = new Date(2019, 10 , 8)
    var step = endTimes - LDate
    var Hours = parseInt(step / 1000 / 60 / 60 % 24)
    var Minutes = parseInt(step / 1000 / 60 % 60)
    var Seconds = parseInt(step / 1000 % 60)
    Hours = Hours < 10 ? "0" + Hours : Hours
    Minutes = Minutes < 10 ? "0" + Minutes : Minutes
    Seconds = Seconds < 10 ? "0" + Seconds : Seconds
    hours.innerHTML = Hours
    minutes.innerHTML = Minutes
    seconds.innerHTML = Seconds
}
fn()
setInterval(fn, 1000)