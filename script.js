const input = document.getElementById("diamondCountInput");
const diamond = document.querySelector(".diamondDiv");
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

function renderDiamond(n, i = 1) {
  const ASTERISK = "*";
  const EPTY_SPACE = "&nbsp" + "&nbsp";

  function line(i) {
    return EPTY_SPACE.repeat((n - i) / 2) + ASTERISK.repeat(i) + "</br>";
  }

  if (i >= n) return;

  diamond.innerHTML +=(line(i));
  renderDiamond(n, i + 2);
  diamond.innerHTML += line(i);
}

function handleSubmit(event) {
  event.preventDefault();
  diamond.innerHTML = " ";

  renderDiamond(input.value);
}
