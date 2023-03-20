window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
   let address = "https://wp.zybooks.com/quotes.php?topic=" + topic  + "&count=" + count;
   console.log(address);
   let xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.responseType = "json";  
   xhr.open("GET", address);
   xhr.send();

   
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler() {
   
   let html;
  
   if(this.response.error == undefined){
      let quotes = this.response;
      html = "<ol>";
      for(let i = 0; i < quotes.length; i++){
         let info = quotes[i];
         html += "<li>" + info.quote + " - " + info.source + "</li>";
         //console.log(info);
      }
      html += "</ol>";
   }
   else{
      html = this.response.error;
   }
   

   document.querySelector("#quotes").innerHTML = html;
 }