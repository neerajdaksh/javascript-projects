const buttons = document.querySelectorAll(".button");
const container = document.querySelector(".color-switcher");

/* buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.id === "gray") {
            container.style.backgroundColor = "gray";
        }
        if (e.target.id === "pink") {
            container.style.backgroundColor = "pink";
        }
        if (e.target.id === "blue") {
            container.style.backgroundColor = "blue";
        }
        if (e.target.id === "yellow") {
            container.style.backgroundColor = "yello";
        }

    });
}); */


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        container.style.backgroundColor = e.target.id;
    });
});