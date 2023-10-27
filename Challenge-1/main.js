let item = document.getElementById("user");

let request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.responseType = "json";
request.send();

request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
        let users = request.response;
        for (data of users) {
            item.innerHTML += `
            <button class="btn">
                <h3>${data.name}</h3>
                <h5>${data.email}</h5>
            </button>`;
        }

        let buttons = document.getElementsByClassName("btn");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                getPosts(users[i].id);
            });
        }
    } else {
        alert("Error");
    }
};

function getPosts(id) {
    let post = document.getElementById("post");

    let request = new XMLHttpRequest();

    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    request.responseType = "json";
    request.send();

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            post.innerHTML = "";
            for (data of posts) {
                post.innerHTML += `
                <div>
                    <h3>${data.title}</h3>
                    <p>${data.body}</p>
                </div>`;
            }
        } else {
            alert("Error");
        }
    };
}
