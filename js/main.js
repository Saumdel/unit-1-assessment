let newTotal;
let plusEl = document.getElementById("add");
let minusEl = document.getElementById("sub");
let inputNum = document.getElementById("user-input").value = "1";
let totalEl = document.getElementById("total").innerText;

plusEl.addEventListener("click", addUp);
minusEl.addEventListener("click", subDown);

function addUp() {   
    newTotal = totalEl.innerText + (parseInt(inputNum));
    if (totalEl <0 ) {
        totalEl.style.color = "red";
    } else {
        totalEl.style.color = "black";
    }
    console.log("added");
    console.log(newTotal);
};

function subDown() {   
    newTotal = totalEl.innerText - (parseInt(inputNum));
    if (totalEl < 0) {
        totalEl.style.color = "red";
    } else {
        totalEl.style.color = "black";
    }
    console.log("subtracted");
    console.log(newTotal);
};