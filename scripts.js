function hideResults() {
  document.getElementById("Error").setAttribute("class", "hidden");
  document.getElementById("Javascript").setAttribute("class", "hidden");
  document.getElementById("C-sharp").setAttribute("class", "hidden");
  document.getElementById("Python").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResults();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const times = parseInt(document.querySelector("input#times").value);
    const camp = parseInt(document.querySelector("input#camp").value);
    const fly = parseInt(document.querySelector("input#fly").value);

    if (!isNaN(times) && !isNaN(camp) && !isNaN(fly)) {
      if (times >= 8 && camp >= 50 && fly >= 10) {
        document.getElementById("Javascript").removeAttribute("class");
      } else if (times >= 5 || camp >= 25 && fly >= 6) {
        document.getElementById("C-sharp").removeAttribute("class");
      } else if (times >= 3 && camp >= 15 && fly >= 2) {
        document.getElementById("Python").removeAttribute("class");
      } else {
        document.getElementById("Error").removeAttribute("class");
      }
    } else {
      document.getElementById("Error").removeAttribute("class");
    }
  };
};
