let cart=[];
function addToCart(name,price){
 cart.push({name,price});
 document.getElementById('cart').innerHTML=cart.map(i=>`<li>${i.name} - ₹${i.price}</li>`).join('');
}