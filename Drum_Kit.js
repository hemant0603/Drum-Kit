var numberOfDrum = document.querySelectorAll(".btn").length;

for (var i = 0; i < numberOfDrum; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimination(buttonInnerHTML);
    });

}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimination(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("sounds/snare.mp3 ");
            crash.play();
            break;

        case "k":
            var kick = new Audio("sounds/crash.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("sounds/kick-bass.mp3");
            snare.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimination(keypress) {
    var activeButton = document.querySelector("." + keypress);
    activeButton.classList.add("press");

    setTimeout(function() {
        activeButton.classList.remove("press")
    }, 100);
}
