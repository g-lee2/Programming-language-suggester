window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    inputs()
  };
}

function inputs () {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const creation = document.querySelector("input[name='creation']:checked").value;
  const level = document.getElementById("level").value;
  const studyMethod = document.querySelector("input[name='study-method']:checked").value;
  const connections = document.getElementById("connections").value;
}