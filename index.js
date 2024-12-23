console.log("linked");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function pressed(key){
  //key could be aswd
  var button = document.querySelector("."+key);
  button.classList.add("pressed");
  setTimeout(function(){
    button.classList.remove("pressed");
  }, 100);
  


}


function playDrums(key){
  switch (key) {
      case "w":
          var audio = new Audio("./sounds/tom-1.mp3");
          audio.play();

          break;

      case "a":
          var audio = new Audio("./sounds/tom-2.mp3");
          audio.play();

          break;
      case "s":
          var audio = new Audio("./sounds/tom-3.mp3");
          audio.play();

          break;
      case "d":
          var audio = new Audio("./sounds/tom-4.mp3");
          audio.play();

          break;
      case "j":
          var audio = new Audio("./sounds/snare.mp3");
          audio.play();

          break;
      case "k":
          var audio = new Audio("./sounds/kick-bass.mp3");
          audio.play();

          break;
      case "l":
          var audio = new Audio("./sounds/crash.mp3");
          audio.play();

          break;
      case "h":
        var audio = new Audio("./sounds/close-hi-hat.wav");
        audio.play();

        break;





      default:console.log(this.innerHTML);
      break;

  }
}


var buttons = document.querySelectorAll(".set button");
for(var i=0; i<buttons.length;i++){
  buttons[i].addEventListener("click", function(){
    // var audio = new Audio("./sounds/tom-1.mp3");
    // audio.play();
    var key = this.innerHTML;
    //change button text
    var color = this.style.color;

    ;
    playDrums(key);
    pressed(key);








  });
}

document.addEventListener("keydown", async function(event){
  var selector = "."+event.key;
  var button = document.querySelector(selector);

  playDrums(event.key);
  pressed(event.key);

})
