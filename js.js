document.getElementById("btn1").onclick = function(){
    this.style.backgroundColor ="red";
};

document.getElementById("btn2").onclick = function(){
    this.style.backgroundColor ="red";
};

document.getElementById("btn3").onclick = function(){
    this.style.backgroundColor ="red";
};
var removecartitembuttons = document.getElementsByClassName("delete")
console.log(removecartitembuttons)
for ( var i= 0; i <   removecartitembuttons.length; i++  ) {
    var button = removecartitembuttons[i]
button.addEventListener('click', function (event){
    var buttonclicked = event.target
buttonclicked.parentElement.remove()
updatecarttotal()
} ) 

}

function updatecarttotal(){
    var cartitemcontainer = document.getElementsByClassName("items")[0]
var cartrows = cartitemcontainer.getElementsByClassName("Item")
total = 0
for (var i = 0; i < cartrows.length; i++){
    var cartrow = cartrows[i]
var priceelemnet = cartrow.getElementsByClassName("price")[0]
var quantityelement = cartrow.getElementsByClassName("Quant")[0]
var price = parsefloat(priceelemnet.innertext)
var quantity = quantityelement.value
total = total + (price * quantity)

}
document.getElementById("total-price")[0].innertext = total
}