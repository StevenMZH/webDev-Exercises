window.addEventListener('DOMContentLoaded', function () {
  var blenderOn = false;
  var blenderSound = document.getElementById("blender-sound");
  var blenderButton = document.getElementById("blender-button-sound");
  var blender = document.getElementById("blender");

  window.blenderController = function() {
    if (blenderOn == false) {
      blenderOn = true;
      soundToggle();
      blender.classList.add("active");
    } else {
      blenderOn = false;
      soundToggle();
      blender.classList.remove("active");
    }
  }

  function soundToggle() {
    if (blenderSound.paused) {
      blenderButton.play();
      blenderSound.play();
    } else {
      blenderButton.play();
      blenderSound.pause();
      blenderSound.currentTime = 0;
    }
  }

  blenderSound.addEventListener("timeupdate", function () {
    if (blenderSound.currentTime > blenderSound.duration - 0.3) {
      blenderSound.currentTime = 0;
      blenderSound.play();
    }
  });
});
