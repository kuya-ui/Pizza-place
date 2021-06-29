// function getSizeValue() {
//     var selectedValue = document.getElementById("size").value;
//     return parseInt(selectedValue);
//     console.log(size)
// }
// function getCrust() {
//     var selectedValue = document.getElementById("crust").value;
//     return parseInt(selectedCrust);
// }
// function getToppings() {
//     var selectedValue = document.getElementById("toppings").value;
//     return parseInt(selectedTopppings);
// }
// function getSizeFlavor() {
//     var selectedValue = document.getElementById("flavor").value;
//     return parseInt(selectedFlavor);
// }
// function getOrder(){
//     var selectedOrder = getElementById("order1").value;
//     return parseInt(selectedOrder);
// }
// function getTotalAmount(){
//     var totalAmount = (getSizeValue() + getCrust() + getToppings())*getTotal
//     a
// }
// function max() {
//     let control = document.getElementById('controls').value;
//     if (control == "") {
//         alert("invalid response");
//     } else {
//         alert("We have received your message. Thank you fro reaching out to us")
//     };
// };
var price,crust,toppings,total,charge;
var delivery;
function Pizza(flavor,crust,size,toppings,orders){
    this.Flavor = flavor;
    this.Crust = crust;
    this.Size = size;
    this.Toppings = toppings;
    this.Orders = orders;
    console.log(flavor,crust,size,toppings,orders);

}
var star = new Pizza(300,250,550,200,300)
