var random = Math.floor(Math.random() + 1);

particlesJS.load("particles-js", "particles" + random + ".json", function() {

  console.log('callback - particles.js config loaded');

});

Number.prototype.pad = function() {

  return ("0" + this).slice(-2);

}

window.setInterval(update, 1000);

update();

function update() {

  var date = new Date();

  var timeText = date.getHours().pad() + ":" + date.getMinutes().pad() + ":" + date.getSeconds().pad();
  document.querySelector(".clock").textContent = timeText;

  var dateText = monthToText(date.getMonth()) + " " + date.getDate() + ", " + date.getFullYear();
  document.querySelector(".date").textContent = dateText;


}

function monthToText(n) {

  var months = ['January', 'Februari', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[n];

}
