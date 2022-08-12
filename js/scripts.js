window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    
    document.getElementById("swift").setAttribute("class", "hidden");
    document.getElementById("java").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("c++").setAttribute("class", "hidden");
  
    const creation = document.querySelector("input[name='creation']:checked").value; 
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;

    document.querySelector("span.name").innerText = firstName + " " + lastName;
    document.querySelector("span.name2").innerText = firstName + " " + lastName;
    document.querySelector("span.name3").innerText = firstName + " " + lastName;
    document.querySelector("span.name4").innerText = firstName + " " + lastName;
  
    if (creation == "apple-apps") {
      document.getElementById("swift").removeAttribute("class");
    } else if (creation == "android-apps") {
      document.getElementById("java").removeAttribute("class");
    } else if (creation == "websites") {
      document.getElementById("python").removeAttribute("class");
    } else {
      document.getElementById("c++").removeAttribute("class");
    }
  } 
}