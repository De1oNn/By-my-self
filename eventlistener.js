document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("my-button");

    button.addEventListener("click", doSomething);

    function doSomething() {
        alert("hello world");
    }
});