//callback Hell

// setTimeout(() => {
//     document.getElementById("one").style.visibility="visible"
//     setTimeout(() => {
//         document.getElementById("two").style.visibility="visible"
//         setTimeout(() => {
//             document.getElementById("three").style.visibility="visible"
//             setTimeout(() => {
//                 document.getElementById("four").style.visibility="visible"
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

//using promise 

let p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    document.getElementById("one").style.visibility = "visible";
    resolve();
  }, 1000);
})
  .then(() => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        document.getElementById("two").style.visibility = "visible";
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        document.getElementById("three").style.visibility = "visible";
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    setTimeout(() => {
      document.getElementById("four").style.visibility = "visible";
      resolve();
    }, 1000);
  });



