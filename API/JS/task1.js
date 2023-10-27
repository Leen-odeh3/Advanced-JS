let title =document.getElementById("title");

let request=new XMLHttpRequest();

request.open("GET","https://jsonplaceholder.typicode.com/posts");
request.responseType="json"
request.send();

request.onload =function(){
   let posts= request.response;
for(let post of posts){
title.innerHTML+=` <p>${post.title}</p>`;
}

}

