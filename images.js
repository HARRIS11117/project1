const images = ["url(LeeDan.jpg)", "url(LeeZiiJia.jpg)", "url(Minions.jpg)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);

    document.body.style.backgroundImage = images[randomNumber];
    color.textContent = images[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * images.length);
}

body = document.getElementsByClassName(body)[0];
