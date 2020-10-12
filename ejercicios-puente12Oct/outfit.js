//primera manera de hacerlo
var sky= " ";

for ( var temp=0; temp<50; temp++) {
 
  if (temp <= 25) {
    if (sky === "soleado")
    console.log("ponte un jersey hay",temp, " grados", "y lleva gafas")
    else {
      console.log("ponte un jersey hay",temp, " grados", "y abre el paraguas")
    }
  }
  else {
    if(sky === "soleado"){
       console.log ("ponte una camiseta hay",temp, " grados","y ponte el sombrero")
    }
    else {

    } console.log ("ponte una camiseta hay",temp, " grados", "y abre el paraguas")
   
  }
}

//segunda manera de hacerlo

var sky="soleado";

for (var t=0 ; t<=50; t++){
  
  if ( t<=25) {
    if (sky === "soleado"){
      console.log("ponte un jersey y unas gafas")
    }
    else {
      console.log("ponte un jersey y un paraguas")
    }
  }
 else {
   if (sky === "soleado"){
      console.log("ponte una camiseta y unas gafas")
    }
    else {
      console.log("ponte una camiseta y un paraguas")
    }
 }
}
