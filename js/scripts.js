function getSizeValue() {
  var selectedValue = document.getElementById("size").value;
  return parseInt(selectedValue);
}
function getToppingsDensity() {
  var selectedCrust = document.getElementById("Toppings density").value;
  return parseInt(selectedCrust);
}
function getCrustThickness() {
  var selectedToppings = document.getElementById("Crust thickness").value;
  return parseInt(selectedToppings);
}
function getQuantity() {
  var selectedNumber = document.getElementById("Number").value;
  return parseInt(selectedQuantity);
}
function getTotalAmount() {
  var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
  alert("You have Orderd" + getQuantity() + " pizza(s)." + "" + " The Total Amount is " + (totalAmount) + "" + " Thank you!");
}