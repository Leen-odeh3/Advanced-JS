let title = document.getElementById("title");

let request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/todos?userId=1");

request.responseType = "json";
request.send();

request.onload = function () {
  console.log(request.response);
  let todos = request.response;

  for (let todo of todos) {
    title.innerHTML += `<h5>${todo.title} </h5>`;
  }
};
