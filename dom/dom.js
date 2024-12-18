let array = [1, 2, 3, 4]

const list = document.querySelectorAll(".list");

for (let i = 0; i < list.length; i++) {
    list[i].style.fontSize = "36px";
    changecolor(list[i]);
}

function changecolor(element) {
    element.style.backgroundColor = "green";
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}