const rgbBtn = document.querySelector("#rgb-btn");
const hexBtn = document.querySelector("#hex-btn");
const randomBtn = document.querySelector("#random-btn");
const randomColorContainer = document.querySelector(".random-color-container");
const typeOfColorName = document.querySelector("#typeOfColorName");
const typeOfColorCode = document.querySelector("#typeOfColorCode");

function randomNumber(length) {
    return Math.floor(Math.random() * length);
}

function createHexColor() {
    const colorCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        hexCode += colorCode[randomNumber(colorCode.length)]
    }
    randomColorContainer.style.backgroundColor = hexCode;
    typeOfColorCode.innerHTML = hexCode;
    typeOfColorName.innerHTML = "HEX";
}

createHexColor();
function createRgbColor() {
    const r = randomNumber(255);
    const g = randomNumber(255);
    const b = randomNumber(255)

    const rgbColor = `rgb(${r},${g},${b})`;
    randomColorContainer.style.backgroundColor = rgbColor;
    typeOfColorCode.innerHTML = rgbColor;
    typeOfColorName.innerHTML = "RGB";

}

let typeOfColor = "hex";

hexBtn.addEventListener("click", () => {
    typeOfColor = "hex";
});

rgbBtn.addEventListener("click", () => {
    typeOfColor = "rgb";


});

randomBtn.addEventListener("click", () => {
    typeOfColor === "hex" ? createHexColor() : createRgbColor();
});
