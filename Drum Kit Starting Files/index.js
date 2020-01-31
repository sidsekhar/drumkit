


for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function()
  {
      var value = this.innerHTML;

      makesound(value);
      buttonanim(value);
  });
}

function makesound(val) {

    switch (val) {
      case 'w':
        aud = new Audio('sounds/tom-1.mp3');
        aud.play();
        break;
      case 'a':
        aud = new Audio('sounds/tom-2.mp3');
        aud.play();
        break;
      case 's':
        aud = new Audio('sounds/tom-3.mp3');
        aud.play();
        break;
      case 'd':
        aud = new Audio('sounds/tom-4.mp3');
        aud.play();
        break;
      case 'j':
        aud = new Audio('sounds/snare.mp3');
        aud.play();
        break;
      case 'k':
        aud = new Audio('sounds/kick-bass.mp3');
        aud.play();
        break;
      case 'l':
        aud = new Audio('sounds/crash.mp3');
        aud.play();
        break;

      default:
        aud = new Audio('pika.mp3');
        aud.play();
    }
}

 document.addEventListener('keypress',function(eve){
   makesound(eve.key);
   buttonanim(eve.key);
 });



 function buttonanim(key)
 {
   var variable=document.querySelector("."+key)
   variable.classList.add("pressed");
   setTimeout(function(){variable.classList.remove("pressed");},1000)


 }
