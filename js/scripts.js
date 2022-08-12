window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    
    document.getElementById("swift").setAttribute("class", "hidden");
    document.getElementById("java").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("c++").setAttribute("class", "hidden");
  
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const selectElements = document.getElementsByClassName("select").value;


    document.querySelector("span.name").innerText = firstName + " " + lastName;
    document.querySelector("span.name2").innerText = firstName + " " + lastName;
    document.querySelector("span.name3").innerText = firstName + " " + lastName;
    document.querySelector("span.name4").innerText = firstName + " " + lastName;
  
    if (selectElements === "a" > "b", "c", "d") {
      document.getElementById("java").removeAttribute("class");
    } else if (selectElements === "b" > "a", "c", "d") {
      document.getElementById("python").removeAttribute("class");
    } else if (selectElements === "c" > "a", "b", "d") {
      document.getElementById("c++").removeAttribute("class");
    } else {
      document.getElementById("swift").removeAttribute("class");
    }
  } 
}