function hideResults() {
  document.getElementById("Javascript").setAttribute("class", "hidden");
  document.getElementById("C#").setAttribute("class", "hidden");
  document.getElementById("Python").setAttribute("class", "hidden");
 
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const times = parseInt(document.querySelector("input#number").value);
  }
  
  if (times >= 3 && height >= 10) {
    document.getElementById("Javascript").removeAttribute("class");
    document.getElementById("C#").removeAttribute("class");
    document.getElementById("Python").removeAttribute("class");
  } 
};
