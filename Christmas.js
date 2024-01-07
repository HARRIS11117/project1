const colors = ["#ff0000", "#ff7878", "#ffffff", "	#74d680", "#378b29"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

