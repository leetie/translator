const goButton = document.getElementById("go");
const output = document.getElementById("output");
const input = document.getElementById("input");
function getInput() {
  const input = document.getElementById("input").value;
  console.log(input);
  return input;
}

function translate(str) {
  str = str.replace(/l/g, "w");
  str = str.replace(/r/g, "w");
  str = str.replace(/R/g, "W");
  str = str.replace(/L/g, "W");
  console.log(str);
  return str
}

goButton.addEventListener('click', (e) => {
  output.innerText = translate(getInput());
  input.value = "";
});

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    goButton.click();
  }
});
