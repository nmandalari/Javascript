var myName = 'Hello ';

function myFunction() {
  var text = document.getElementById('myText').value;

  myName = myName + text;

  document.getElementById('output').innerHTML = myName;
}

var myNumber = 4;

function myAddition() {
  var numStr = document.getElementById('myChoice').value;
  var num = parseInt(numStr);
  myNumber = myNumber + num;

  document.getElementById('output').innerHTML = myNumber
}
