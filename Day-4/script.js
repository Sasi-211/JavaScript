// DOM
/*
console.log(document.body);

let para = document.getElementsByTagName("p")
console.log(para[2]);

let heading = document.getElementsByTagName('h1')[0]
console.log(heading);

let buchi = document.getElementsByClassName("buchi")
console.log(buchi[0]);

let boo = document.getElementById("boo")

boo.innerText = "hello"
// boo.innerText = "<u>hello</u1>"
boo.innerHTML = "<u>hello</u>"

*/


// let button = getElementsByTagName("button")
// onclick = "Bye"

let paras = document.getElementsByTagName("p")
paras[4].innerHTML = "<i>hello</i>"

document.getElementsByClassName("para")[1].innerHTML = "<h1>Welcome</h1>"