let oldNoOfDivs = 16;
let tileColor = "#000000";
var r = document.querySelector(':root');
const board = document.querySelector(".board");
createDivs(16);
allocateDivs();

const colorSelect = document.querySelector("#colorPalette");
colorSelect.addEventListener('change', function() {
    const current = document.querySelector(".curColor");
    current.style['background-color'] = colorSelect.value;
    tileColor = colorSelect.value;
});


const black = document.querySelector(".black");
black


const newPage = document.querySelector(".newPage");
newPage.addEventListener('click', newBoard);

const clearPage = document.querySelector(".clearPage");
clearPage.addEventListener('click', clearBoard);

let mouseIsDown = false;
document.addEventListener('mousedown', function () {
    mouseIsDown = true;
});
document.addEventListener('mouseup', function () {
    mouseIsDown = false;
});

function clearBoard() {
    let tiles = document.querySelectorAll(".tiles");
    tiles.forEach(tile => {
        tile.style.backGroundColor = "white";
    });
}

function newBoard() {
    clearBoard();
    let col = prompt("Enter the number of square columns:");
    let row = prompt("Enter the number of square rows:");
    createDivs(col * row);
    r.style.setProperty('--columns', col);
    r.style.setProperty('--rows', row);
}

function createDivs(noOfDivs) {
    let i = 0;
    if (noOfDivs > oldNoOfDivs) {
        newNoOfDivs = noOfDivs - oldNoOfDivs;
    } else if (noOfDivs < oldNoOfDivs) {
        const tilesDel = document.querySelectorAll(".tiles");
        while (i < (oldNoOfDivs - noOfDivs)) {
            tilesDel[i].remove();
            i++;
        }
        newNoOfDivs = oldNoOfDivs - noOfDivs;
    } else {
        newNoOfDivs = noOfDivs;
    }
    while (i < newNoOfDivs) {
        const div = document.createElement("div");
        div.className = "tiles";
        div.classList.add("unselectable");
        board.appendChild(div);
        i++;
    }
    oldNoOfDivs = noOfDivs;
    allocateDivs();
}

function allocateDivs() {
    let tiles = document.querySelectorAll(".tiles");

    tiles.forEach(tile => tile.addEventListener('mouseenter', function (e) {
        if (mouseIsDown) {
            e.target.style['background-color'] = tileColor;
        }
    }));
    tiles.forEach(tile => tile.addEventListener('mousedown', function (e) {
        e.target.style['background-color'] = tileColor;
    }));
}