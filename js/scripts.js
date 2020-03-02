function getValue() {
  var selectedValue = document.getElementById("Size").value;
  return parseInt(selectedValue);
}
function getToppingsDensity() {
  var selectedCrust = document.getElementById("Toppings density").value;
  return parseInt(selectedToppingsDensity);
}
function getCrustThickness() {
  var selectedToppings = document.getElementById("Crust thickness").value;
  return parseInt(selectedCrustThickness);
}
function getNumber() {
  var selectedNumber = document.getElementById("Number").value;
  return parseInt(selectedNumber);
}
function getTotal() {
  var totalAmount = (getValue() + getCrustThickness() + getToppingsThickness()) * getTotal();
  alert("You have successfully orderd" + getQuantity() + " pizza(s) from Pizzeria Laventino." + "" + " The Total Amount is " + (totalAmount) + "" + " Thank you and Come again!");
}