// function myFunction() {
//     alert("Hello! My name is Liam !!");
//     }

// function display() {
//     alert('My name is Joel')
// }

const BtnDisplay = document.getElementById('btnMadeBy');

//Approach 1
function display() {
    alert('Hello World!')
}


//Approach 2
BtnDisplay.addEventListener('click' , ()=>{
    alert( 'Hello World ');
})
    
// function myFunction(){
// const BtnDisplay = document.getElementById('btnMadeBy')
// }

// Display after button 
BtnDisplay.addEventListener('click' , ()=>{
document.getElementById('paragraph'). innerText = 'Hello my name is Liam';
})

// const Name = Liam;
// const Surname = Engel;
// let total = Name + Surname;
// document.getElementById("paragraph").innerHTML =
// "The total is: " + total;

var myStr = "I am a \"double quoted\" string inside another \"double quotes\"."; 
console.log(myStr);

function Liam(e){
    var firstName= document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    document.getElementById("show").innerText = firstName+" "+lastName;
  }
  
  console.log("My Name is " .concat(firstName, ", my Surname is ",lastName, ",Age is ",age, "years old"));