//parentElement

let x=document.getElementById("inner").parentElement;
console.log(x)

document.getElementById("inner").parentElement.style.backgroundColor='red'

var y=document.getElementById("inner").parentNode
console.log(y)

y.style.backgroundColor='yellow'


//parentNode=
//both rendered as a same only the difference is if we dont have any value in
//parentElement it gives a null value but in parentNode it gives a some value;


