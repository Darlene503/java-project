function hideResults() {
  document.getElementById("Error").setAttribute("class", "hidden");
  document.getElementById("Javascript").setAttribute("class", "hidden");
  document.getElementById("C#").setAttribute("class", "hidden");
  document.getElementById("Python").setAttribute("class", "hidden");
 
}

window.onload = function() {
  hideResults()

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const times = parseInt(document.querySelector("input#number").value);
    const camp = parseInt(document.querySelector("input#number").value);

  }
  
  if (times && camp && flying) {
    if (age >= 12 && height >= 60) {
      document.getElementById("times").removeAttribute("class");
      document.getElementById("camp").removeAttribute("class");
      document.getElementById("fly").removeAttribute("class");
    } else if (age >= 12 || height >= 48) {
      document.getElementById("rafting").removeAttribute("class");
      document.getElementById("hiking").removeAttribute("class");
    }
  } else (isNaN(times) && isNan(camp) && isNaN(fly)) 
    document.getElementById("error").removeAttribute("class");
  }; 