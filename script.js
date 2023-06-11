//your JS code here. If required.
 var listItem = document.getElementById("level");
  var level = 0;

  while (listItem.parentElement) {
    level++;
    listItem = listItem.parentElement;
  }

  alert("The level of the element is: " + level);