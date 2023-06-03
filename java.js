function hideResults() {
  document.getElementById("swings").setAttribute("class", "hidden");
  document.getElementById("coaster").setAttribute("class", "hidden");
  document.getElementById("tower").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const age = parseInt(document.querySelector("input#number").value);
  }
  
  // we're evaluating the Tower of Doom ride first
  if (age >= 12 && height >= 60) {
    document.getElementById("swings").removeAttribute("class");
    document.getElementById("coaster").removeAttribute("class");
    document.getElementById("tower").removeAttribute("class");
  } 
};
