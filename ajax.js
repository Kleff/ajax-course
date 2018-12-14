document.getElementById("button").addEventListener("click", loadText);

function loadText() {
  // Create XHR Object
  var xhr = new XMLHttpRequest();
  // OPEN - type, url/file, async
  xhr.open("GET", "sampple.txt", true);
  xhr.onload = function() {
    if (this.status == 200) {
      document.getElementById("request").innerHTML = this.response;
    } else if (this.status === 404) {
      document.getElementById("request").innerHTML = "File Not Found";
    }
  };
  // Handling errors
  xhr.onerror = function() {
    console.log("Request Error...");
  };
  // Sends request
  xhr.send();
}
