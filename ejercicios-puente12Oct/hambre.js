//primera manera de hacerlo

var howMuch ="mucha";
var result = " ";

for(var level=1; level<5; level++) {
  result= result + " " + howMuch;
 
  console.log("Tengo"+ result +" hambre.");
}



//segunda manera de hacerlo

var howMuch =" ";

for(var level=1; level<5; level++) {
 howMuch = " "+ "mucha" + howMuch;
  
  console.log("Tengo"+ howMuch +" hambre.");
}
