var sw = {
  /* [INIT] */
  time: null, // holds HTML time display
  reset: null, // holds HTML reset button
  ego: null, // holds HTML start/stop button
  timer: null, // timer object
  now: 0, // current timer
  init: function() {
    // Get HTML elements
    sw.etime = document.getElementById("clockTime");
    sw.erst = document.getElementById("resetClock");
    sw.ego = document.getElementById("startClock");

    // Attach listeners
    sw.erst.addEventListener("click", sw.reset);
    sw.erst.disabled = false;
    sw.ego.addEventListener("click", sw.start);
    sw.ego.disabled = false;
  },

  /* [ACTIONS] */
  tick: function() {
    // tick() : update display if stopwatch running

    // Calculate hours, mins, seconds
    sw.now++;
    var remain = sw.now;
    var hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    var mins = Math.floor(remain / 60);
    remain -= mins * 60;
    var secs = remain;

    // Update the display timer
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }
    sw.etime.innerHTML = hours + ":" + mins + ":" + secs;
  },

  start: function() {
    // start() : start the stopwatch

    sw.timer = setInterval(sw.tick, 1000);
    sw.ego.value = "Stop";
    sw.ego.classList.remove("start");
    sw.ego.classList.add("stop");
    sw.ego.removeEventListener("click", sw.start);
    sw.ego.addEventListener("click", sw.stop);
  },

  stop: function() {
    // stop() : stop the stopwatch

    clearInterval(sw.timer);
    sw.timer = null;
    sw.ego.value = "Start";
    sw.ego.classList.add("start");
    sw.ego.classList.remove("stop");
    sw.ego.removeEventListener("click", sw.stop);
    sw.ego.addEventListener("click", sw.start);
  },

  reset: function() {
    // reset() : reset the stopwatch

    // Stop if running
    if (sw.timer != null) {
      sw.stop();
    }

    // Reset time
    sw.now = -1;
    sw.tick();
  }
};

var sw1 = {
  /* [INIT] */
  etime: null, // holds HTML time display
  erst: null, // holds HTML reset button
  ego: null, // holds HTML start/stop button
  timer: null, // timer object
  now: 0, // current timer
  init: function() {
    // Get HTML elements
    sw1.etime = document.getElementById("clockTime1");
    sw1.erst = document.getElementById("resetClock1");
    sw1.ego = document.getElementById("startClock1");

    // Attach listeners
    sw1.erst.addEventListener("click", sw1.reset);
    sw1.erst.disabled = false;
    sw1.ego.addEventListener("click", sw1.start);
    sw1.ego.disabled = false;
  },

  /* [ACTIONS] */
  tick: function() {
    // tick() : update display if stopwatch running

    // Calculate hours, mins, seconds
    sw1.now++;
    var remain = sw1.now;
    var hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    var mins = Math.floor(remain / 60);
    remain -= mins * 60;
    var secs = remain;

    // Update the display timer
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }
    sw1.etime.innerHTML = hours + ":" + mins + ":" + secs;
  },

  start: function() {
    // start() : start the stopwatch

    sw1.timer = setInterval(sw1.tick, 1000);
    sw1.ego.value = "Stop";
    sw1.ego.classList.remove("start");
    sw1.ego.classList.add("stop");
    sw1.ego.removeEventListener("click", sw1.start);
    sw1.ego.addEventListener("click", sw1.stop);
  },

  stop: function() {
    // stop() : stop the stopwatch

    clearInterval(sw1.timer);
    sw1.timer = null;
    sw1.ego.value = "Start";
    sw1.ego.classList.add("start");
    sw1.ego.classList.remove("stop");
    sw1.ego.removeEventListener("click", sw1.stop);
    sw1.ego.addEventListener("click", sw1.start);
  },

  reset: function() {
    // reset() : reset the stopwatch

    // Stop if running
    if (sw1.timer != null) {
      sw1.stop();
    }

    // Reset time
    sw1.now = -1;
    sw1.tick();
  }
};

var sw2 = {
  /* [INIT] */
  etime: null, // holds HTML time display
  erst: null, // holds HTML reset button
  ego: null, // holds HTML start/stop button
  timer: null, // timer object
  now: 0, // current timer
  init: function() {
    // Get HTML elements
    sw2.etime = document.getElementById("clockTime2");
    sw2.erst = document.getElementById("resetClock2");
    sw2.ego = document.getElementById("startClock2");

    // Attach listeners
    sw2.erst.addEventListener("click", sw2.reset);
    sw2.erst.disabled = false;
    sw2.ego.addEventListener("click", sw2.start);
    sw2.ego.disabled = false;
  },

  /* [ACTIONS] */
  tick: function() {
    // tick() : update display if stopwatch running

    // Calculate hours, mins, seconds
    sw2.now++;
    var remain = sw2.now;
    var hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    var mins = Math.floor(remain / 60);
    remain -= mins * 60;
    var secs = remain;

    // Update the display timer
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }
    sw2.etime.innerHTML = hours + ":" + mins + ":" + secs;
  },

  start: function() {
    // start() : start the stopwatch

    sw2.timer = setInterval(sw2.tick, 1000);
    sw2.ego.value = "Stop";
    sw2.ego.classList.remove("start");
    sw2.ego.classList.add("stop");
    sw2.ego.removeEventListener("click", sw2.start);
    sw2.ego.addEventListener("click", sw2.stop);
  },

  stop: function() {
    // stop() : stop the stopwatch

    clearInterval(sw2.timer);
    sw2.timer = null;
    sw2.ego.value = "Start";
    sw2.ego.classList.add("start");
    sw2.ego.classList.remove("stop");
    sw2.ego.removeEventListener("click", sw2.stop);
    sw2.ego.addEventListener("click", sw2.start);
  },

  reset: function() {
    // reset() : reset the stopwatch

    // Stop if running
    if (sw2.timer != null) {
      sw2.stop();
    }

    // Reset time
    sw2.now = -1;
    sw2.tick();
  }
};

function startDynamicClock() {
  sw2.etime = document.getElementById("clockTime2");
  sw2.erst = document.getElementById("resetClock2");
  sw2.ego = document.getElementById("startClock2");
  // start() : start the stopwatch
  sw2.timer = setInterval(sw2.tick, 1000);
  sw2.ego.value = "stop";
  sw2.ego.classList.remove("start");
  sw2.ego.classList.add("stop");
  sw2.ego.addEventListener("click", sw2.stop);
}

function createStopWatch() {
  var a = document.createElement("div");
  var clock = document.createElement("div");
  var inputStart = document.createElement("input");
  var inputReset = document.createElement("input");

  a.setAttribute("id", "stopWatch2");
  a.classList.add(
    "stopWatch",
    "d-flex",
    "w-100",
    "flex-wrap",
    "justify-content-center",
    "box-shadow-card"
  );
  document.getElementById("main").appendChild(a);

  // dynamically create and add clock

  clock.setAttribute("id", "clockTime2");
  clock.classList.add("clock");
  clock.innerHTML = "00" + ":" + "00" + ":" + "00";
  document.getElementById("stopWatch2").appendChild(clock); // put it into the DOM

  // dynamically create and add start button input
  inputStart.type = "button";
  inputStart.className = "start"; // set the CSS class
  inputStart.value = "Start"; // set the input value
  inputStart.setAttribute("id", "startClock2");
  document.getElementById("stopWatch2").appendChild(inputStart); // put it into the DOM
  document
    .getElementById("startClock2")
    .addEventListener("click", startDynamicClock());

  // dynamically create and add reset button input
  inputReset.type = "button";
  inputReset.className = "reset"; // set the CSS class
  inputReset.value = "Reset"; // set the input value
  inputReset.setAttribute("id", "resetClock2");
  document.getElementById("stopWatch2").appendChild(inputReset); // put it into the DOM
  document.getElementById("resetClock2").addEventListener("click", sw2.reset);

  // init dynamic clock to start
  document.getElementById("addTimerMobile").classList.add("d-none");
  document.getElementById("footerTop").classList.add("d-none");
  document.getElementById("stopWatch2").addEventListener("load", sw2.init);
}

window.addEventListener("load", sw.init);
window.addEventListener("load", sw1.init);
