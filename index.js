// var a = Math.random();
// a = a*6;
// a = Math.floor(a) + 1 ; 
// if(a == 1){
//     document.querySelector(".img1").setAttribute("src" , "./images/dice1.png");
// }
// if(a == 2){
//     document.querySelector(".img1").setAttribute("src" , "./images/dice2.png");
// }
// if(a == 3){
//     document.querySelector(".img1").setAttribute("src" , "./images/dice3.png");
// }
// if(a == 4){
//     document.querySelector(".img1").setAttribute("src" , "./images/dice4.png");
// }
// if(a == 5){
//     document.querySelector(".img1").setAttribute("src" , "./images/dice5.png");
// }
// if(a == 6){
//     document.querySelector(".img1").setAttribute("src" , "./images/dice6.png");
// }
// var b = Math.random();
// b = b*6;
// b = Math.floor(b) + 1 ; 
// if(b == 1){
//     document.querySelector(".img2").setAttribute("src" , "./images/dice1.png");
// }
// if(b == 2){
//     document.querySelector(".img2").setAttribute("src" , "./images/dice2.png");
// }
// if(b == 3){
//     document.querySelector(".img2").setAttribute("src" , "./images/dice3.png");
// }
// if(b == 4){
//     document.querySelector(".img2").setAttribute("src" , "./images/dice4.png");
// }
// if(b == 5){
//     document.querySelector(".img2").setAttribute("src" , "./images/dice5.png");
// }
// if(b == 6){
//     document.querySelector(".img2").setAttribute("src" , "./images/dice6.png");
// }
  //second Method//
  var random_number1 = Math.floor( (Math.random()*6 ) ) + 1;
  var random_image1 = "./images/" + "dice"+ random_number1 +".png" ;  
  document.querySelector(".img1").setAttribute("src" , random_image1);

  var random_number2 = Math.floor( (Math.random()*6 ) ) + 1;
  var random_image2 = "./images/" + "dice"+ random_number2 +".png" ;  
  document.querySelector(".img2").setAttribute("src" , random_image2 );


if(random_number1 > random_number2){
    document.querySelector("h1").innerHTML= " Player 1 win !! ";
}
else if(random_number1 < random_number2){
    document.querySelector("h1").innerHTML= " Player 2 win !! ";
}
 else {
    document.querySelector("h1").innerHTML= " Match Draw !! ";
}
