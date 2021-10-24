// To select button document.querySelector and add event listener on targetted button

var numberOfButtons=document.querySelectorAll('.drum').length

//detecting button press
for (var i=0; i<numberOfButtons; i++){
document.querySelectorAll('button')[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

})
}



//we will not use () after handle click because if we do then straight up method will be called

// keyboard press

document.addEventListener('keydown',function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key){
    switch (key) {
        case 'w':
         var tom1=new Audio('sounds/tom-1.mp3');
         tom1.play();
         break;
 
         case 'a':
             var tom2=new Audio('sounds/tom-2.mp3')
             tom2.play()
             break
         
         case 's':
             var tom3=new Audio('sounds/tom-3.mp3')
             tom3.play()
             break
         case 'd':
             var tom4=new Audio('sounds/tom-4.mp3')
             tom4.play()
             break
         case 'j':
             var snare=new Audio('sounds/snare.mp3')
             snare.play()
             break
         case 'l':
             var kickbass=new Audio('sounds/kick-bass.mp3')
             kickbass.play()
             break
         case 'k':
             var crash=new Audio('sounds/crash.mp3')
             crash.play()
             break
    
        default:
            break;
    }
}

function buttonAnimation(keypress){
    var pressedKey=document.querySelector("."+keypress);

    pressedKey.classList.add("pressed")

    setTimeout(function(){
        pressedKey.classList.remove("pressed");
    },100)

}