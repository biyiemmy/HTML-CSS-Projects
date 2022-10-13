let start = setInterval(update, 100);
let end = 1;

function update() {
  let counter = document.getElementById("counter");
  let counts = end++;
  if (end > 75) {
    clearInterval(start);
  }
  counter.innerHTML = counts + "%";
  document.getElementById(
    "progress-outer"
  ).style.background = `conic-gradient(#4070f4 ${counts}%, #fff ${counts}% )`;
}


