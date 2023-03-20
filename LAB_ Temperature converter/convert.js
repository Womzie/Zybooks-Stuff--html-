window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   
   let convert = document.querySelector("#convertButton")

   let faren = document.querySelector("#fInput");
   let cel = document.querySelector("#cInput");
   let im = document.querySelector("img");
   let error = document.querySelector("#errorMessage");

   cel.addEventListener("input", function(){
      faren.value = "";
   });
   faren.addEventListener("input", function(){
      cel.value = "";
   });
   
   convert.addEventListener("click", function(){
      let tempC, tempF;
      console.log(cel.value);
      console.log(faren.value);

      error.innerHTML = "";
      if(isNaN(cel.value)){
         error.innerHTML = cel.value + " is not a number";
         return;

      }
      if(isNaN(faren.value)){
         error.innerHTML = faren.value + " is not a number";
         return;
      }


      if(cel.value && faren.value ===""){
         tempC = parseFloat(cel.value)
         
         cel.value = "";
         faren.value = convertCtoF(tempC);
         tempF = convertCtoF(tempC);
         
      }
      else if(faren.value != "" && cel.value ===""){
         tempF = parseFloat(faren.value)
         
         faren.value ="";
         cel.value = convertFtoC(tempF);
         tempC = convertFtoC(tempF);
      
      }

      
      

      if(tempF < 32){
         im.src = "cold.png";
      }
      else if(tempF < 51){
         im.src = "cool.png";
      }
      else{
         im.src = "warm.png";
      }

   } );
}

function convertCtoF(degreesCelsius) {
   return degreesCelsius * (9/5) + 32;
   // TODO: Complete the function
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * (5/9);
   // TODO: Complete the function
}
