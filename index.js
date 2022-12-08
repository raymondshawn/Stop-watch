let hour = 00;
let min = 00;
let sec = 00;
let timer;
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", () => {
  timer = true;
  stopwatch();
});

resetBtn.addEventListener("click", () => {
  timer = false;

  hour = 00;
  min = 00;
  sec = 00;
  document.getElementById("hr").innerHTML = 00;
  document.getElementById("min").innerHTML = 00;
  document.getElementById("sec").innerHTML = 00;
});

stopBtn.addEventListener("click", () => {
  timer = false;
});

function stopwatch() {
  if (timer) {
    if (sec < 60) {
      sec += 1;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hour++;
      min = 0;
    }

    let hrstr = hour;
    let minstr = min;
    let secstr = sec;

    if (min < 10) {
      minstr = "0" + minstr;
    }

    if (sec < 10) {
      secstr = "0" + secstr;
    }

    document.getElementById("hr").innerHTML = hrstr;
    document.getElementById("min").innerHTML = minstr;
    document.getElementById("sec").innerHTML = secstr;

    setTimeout(stopwatch, 1000);
  }
}
