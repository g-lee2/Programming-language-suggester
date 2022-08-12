window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    
    document.getElementById("swift").setAttribute("class", "hidden");
    document.getElementById("java").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("c++").setAttribute("class", "hidden");
  
    const creation = document.querySelector("input[name='creation']:checked").value; 
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;

    document.querySelector(".name").innerHTML = firstName + " " + lastName;
  
    console.log(creation);
    if (creation === "apple-apps") {
      console.log("GO");
      document.getElementById("swift").removeAttribute("class");
    } else if (creation === "android-apps") {
      console.log("GO");
      document.getElementById("java").removeAttribute("class");
    } else if (creation === "websites") {
      console.log("GO");
      document.getElementById("python").removeAttribute("class");
    } else if (creation === "games") {
      console.log("GO");
      document.getElementById("c++").removeAttribute("class");
    }
  } 
}