var statesSelect = document.getElementById("states");

var states = {
 
};

for (var key in states) {
  console.log(key);

  if (states.hasOwnProperty(key)) {
    console.log(key);
    var option = document.createElement("option"); // Create a <p> node
    var t = document.createTextNode(states[key]); // Create a text node
    option.appendChild(t); //Append the text to<p>
    statesSelect.appendChild(option);
  }
}
