// XMLHttpRequest
function get(){
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/comments", true);
xhr.responseType='json'
xhr.send();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(xhr.response);
  }
};
}

get(); //without any-error

function post(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/comments", true);
    xhr.responseType='json'

    xhr.setRequestHeader("Accept","application/json");
    
    xhr.setRequestHeader("content-type","application/json");

    let body = `{
        "name" :"leen" , 
        "email":"leenodeh287@gmail.com" 
              }`;

    xhr.send(body);
    xhr.onload = function () {
    
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.response);
      }
      else{
        alert("error :( ")
      }
    };
    }

    post();