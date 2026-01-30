let isYellow = false;

document.getElementById("btn").onclick = function () {
  document.body.style.background = isYellow ? "white" : "yellow";
  isYellow = !isYellow;
};
