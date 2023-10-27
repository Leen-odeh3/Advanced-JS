
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "https://jsonplaceholder.typicode.com/comments/3", true);
    xhr.responseType = "json";
  
    xhr.send();
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("done delete");
      } else {
        alert("error ");
      }
    };
