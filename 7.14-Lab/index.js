function parseScores(scoresString) {
   // TODO: Compete the function
   let scores = scoresString.split(" ");
   console.log(scores);
   return scores;
}

function buildDistributionArray(scoresArray) {
                  // A B C D F 
   let gradeArray = [0,0,0,0,0]
   for(let i = 0; i < scoresArray.length; i++){
      let tempScore= parseInt(scoresArray[i]);
      if(tempScore > 89){
         gradeArray[0]++;
      }
      else if(tempScore > 79){
         gradeArray[1]++;
      }
      else if(tempScore > 69){
         gradeArray[2]++;
      }
      else if(tempScore > 59){
         gradeArray[3]++;
      }
      else{
         gradeArray[4]++;
      }
   }
   return gradeArray;
   // TODO: Compete the function
}

function setTableContent(userInput) {
   let scores = parseScores(userInput);
   let grades = buildDistributionArray(scores);
   console.log(grades);

   let html;
   html = '<td><div style="height:'+ grades[0] * 10 + 'px" class="bar0"></div></td>';
   html += '<td><div style="height:'+ grades[1] * 10 + 'px" class="bar1"></div></td>';
   html += '<td><div style="height:'+ grades[2] * 10 + 'px" class="bar2"></div></td>';
   html += '<td><div style="height:'+ grades[3] * 10 + 'px"  class="bar3"></div></td>';
   html += '<td><div style="height:'+ grades[4] * 10 + 'px" class="bar4"></div></td>';

   document.querySelector("#firstRow").innerHTML = html;

   let html2;
   html2 = '<td>' + grades[0]+ '</td>';
   html2 += '<td>' + grades[1]+ '</td>';
   html2 += '<td>' + grades[2]+ '</td>';
   html2 += '<td>' + grades[3]+ '</td>';
   html2 += '<td>' + grades[4]+ '</td>';

   document.querySelector("#thirdRow").innerHTML = html2;
   // TODO: Compete the function
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");