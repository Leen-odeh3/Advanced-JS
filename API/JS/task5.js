let request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/comments/3");
request.responseType = "json";
request.send();

request.onload = function () {
  let posts = request.response;
  console.log(posts);
};

function update() {
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", "https://jsonplaceholder.typicode.com/comments/3", true);
  xhr.responseType = "json";

  xhr.setRequestHeader("Accept", "application/json");

  xhr.setRequestHeader("content-type", "application/json");

  let body = `{
        "name" :"leen" , 
        "email":"leenodeh287@gmail.com" 
              }`;

  xhr.send(body);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.response);
    } else {
      alert("error :( ");
    }
  };
}

update();
