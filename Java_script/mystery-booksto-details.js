let  favorite1= document.getElementById('fav1')
let  favorite2= document.getElementById('fav2')
let  cart1= document.getElementById('car1')
let  cart2= document.getElementById('car2')
let  payment= document.getElementById('payy')

// favorite
function fillfav(){
   favorite1.style.display='none'
   favorite2.style.color='red'
//    favorite1.style.color='white'
   favorite1.style.fontSize='0'
 
}
function hoverfav(){
    favorite1.style.display='none'

 }
function mouseleavefav(){
    favorite1.style.display='flex'
}


// cart
function fillcar(){
    cart1.style.display='none'
    cart2.style.color='yellow'
    cart1.style.fontSize='0'
   
}
function hovercar(){
     cart1.style.display='none'
}
function mouseleavecar(){
    cart1.style.display='flex'
}


// payement
function paytm(){
    payment.style.backgroundColor='yellowgreen'
    payment.style.color='white'
    payment.innerHTML='Payment Processing'
    payment.style.fontWeight='700'
    
}
 