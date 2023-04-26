var total = document.querySelectorAll(".drum").length;
for (var i = 0; i < total; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttoninnerHTML = this.innerHTML;
    makeSound(buttoninnerHTML);
    keyAnimation(buttoninnerHTML);

    document.addEventListener("keydown", function (e) {
      makeSound(e.key);
      keyAnimation(e.key);
    });

    function makeSound(key) {
      switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();

          break;

        case "a":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();

          break;

        case "s":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();

          break;
        case "d":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();

          break;
        case "j":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();

          break;
        case "k":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();

          break;
        case "l":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();

          break;

        default:
          buttoninnerHTML;
          break;
      }
    }

    function keyAnimation(setword) {
      var ludo = document.querySelector("." + setword);
      ludo.classList.add("pressed");

      setTimeout(function () {
        ludo.classList.remove("pressed");
      }, 100);
    }
  });
}
