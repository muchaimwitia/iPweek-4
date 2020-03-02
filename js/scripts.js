function getSize() {
  var selectedSize = document.getElementById("Size").value;
  return parseInt(selectedSize);
}
function getToppingsDensity() {
  var selectedToppingsDensity = document.getElementById("ToppingsDensity").value;
  return parseInt(selectedToppingsDensity);
}
function getCrustThickness() {
  var selectedCrustThickness = document.getElementById("CrustThickness").value;
  return parseInt(selectedCrustThickness);
}
function getNumber() {
  var selectedNumber = document.getElementById("Number").value;
  return parseInt(selectedNumber);
}
function getValue() {
  var totalAmount = (getSize() + getCrustThickness() + getToppingsDensity()) * getNumber();
  alert("You have successfully orderd" + getNumber() + " pizza(s) from Pizzeria Laventino." + "" + " The Total Amount is " + (totalAmount) + "" + " Thank you and Come again!");
}