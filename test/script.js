//neg element songoj avan tuuniigee js eer style iign uurchluh
const hello = document.querySelector(".hello")
hello.style.color = "red"
console.log(hello);
// buten div iig te chigeern uurchluh
const listitems = document.querySelector(".list-items")
listitems.style.color = "red"
console.log(listitems);
// hervee olon class baihiin bol bugdiign songoj avaad tuund n stle uguh 
// const all = document.querySelectorAll(".all")
// for(let i = 0; i < all.length; i++){
//     all[i].style.color = "blue"
// }
// console.log(all);

// neg div ch ymuu songoj avaad tuun dotroo shine div li ul ged hussenee neeh 
const div = document.querySelector(".list-items")
div.style.border = "2px solid black"
div.style.background = "aqua" 
div.style.width = "50%"
div.style.font = "5rem"
div.style.height = "50%"

const li = document.createElement("li")

div.append(li)

li.innerText = "hello";
li.classList.add(".list-items");

// li.remove();