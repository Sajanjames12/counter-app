let count = 0
document.getElementById("heading").textContent = "Counter App";
const scoreEl = document.getElementById("score")

scoreEl.innerText = 0
scoreEl.style.fontSize = "40px";

const increaseBtnEl = document.querySelector("#increaseBtn")
const decreaseBtnEl = document.querySelector("#decreaseBtn")
const resetBtn = document.querySelector("#resetBtn")

increaseBtnEl.addEventListener("click", function() {
    count += 1;
    scoreEl.innerText = count;
})


decreaseBtnEl.addEventListener("click", function() {
    count -= 1;
    scoreEl.innerText = count;
})

resetBtn.addEventListener("click", function (){
    count = 0
    scoreEl.innerText = count
})