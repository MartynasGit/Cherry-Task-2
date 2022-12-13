const input = document.getElementById("diamondCountInput");
const diamond = document.querySelector(".diamondDiv");
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

function renderDiamond(size, currentSize = 1) {
  const ASTERISK = "*";
  const EMPTY_SPACE = "&nbsp" + "&nbsp";
  function line(currentSize) {
    diamond.innerHTML +=
      EMPTY_SPACE.repeat((size - currentSize) / 2) +
      ASTERISK.repeat(currentSize) +
      "</br>";
  }
  if (size % 2 == 0) {
    if (currentSize >= size) return;
    line(currentSize);
    renderDiamond(size, currentSize + 2);
    line(currentSize);
  } else {
    line(currentSize);
    if (currentSize == size) return;
    renderDiamond(size, currentSize + 2);
    line(currentSize);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  diamond.innerHTML = " ";

  renderDiamond(input.value);
}
