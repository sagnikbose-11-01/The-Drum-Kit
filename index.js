

/*order - tom1, tom2, tom3, tom4, snare, crash, kick*/

//order - w, a, s, d, j, k, l



//detecting mouse click
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
          
        let buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
   
  

}



//detecting keyboard press
document.addEventListener("keydown", function(event){
        
    makeSound(event.key)
    buttonAnimation(event.key)
})





function makeSound(key){
    let sound;
    switch (key) {
        case 'w':
            sound = new Audio("./sounds/tom-1.mp3"); //creating an Audio object
            sound.play();
            break;


        case 'a':
            sound = new Audio("./sounds/tom-2.mp3"); //creating an Audio object
            sound.play();

        case 's':
            sound = new Audio("./sounds/tom-3.mp3"); //creating an Audio object
            sound.play();


        case 'd':
            sound = new Audio("./sounds/tom-4.mp3"); //creating an Audio object
            sound.play();

        case 'j':
            sound = new Audio("./sounds/snare.mp3"); //creating an Audio object
            sound.play();

        case 'k':
            sound = new Audio("./sounds/crash.mp3"); //creating an Audio object
            sound.play();

        case 'l':
            sound = new Audio("./sounds/kick-bass.mp3"); //creating an Audio object
            sound.play();
        default:
            console.log(key)
            break;
    }
}



function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed"); // adding the .pressed class to the clicked button 

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100); //to remove the .pressed class after 0.1 seconds</

}














/*document.querySelectorAll(".drum")[0].addEventListener("click", function (){
    
    let sound = new Audio("./sounds/tom-1.mp3"); //creating an Audio object
    sound.play();
} );



document.querySelectorAll(".drum")[1].addEventListener("click", function (){
    
    let sound = new Audio("./sounds/tom-2.mp3"); //creating an Audio object
    sound.play();
} );


document.querySelectorAll(".drum")[2].addEventListener("click", function (){
    
    let sound = new Audio("./sounds/tom-3.mp3"); //creating an Audio object
    sound.play();
} );


document.querySelectorAll(".drum")[3].addEventListener("click", function (){
    
    let sound = new Audio("./sounds/tom-4.mp3"); //creating an Audio object
    sound.play();
} );


document.querySelectorAll(".drum")[4].addEventListener("click", function (){
    
    let sound = new Audio("./sounds/snare.mp3"); //creating an Audio object
    sound.play();
} );

document.querySelectorAll(".drum")[5].addEventListener("click", function (){
    
    let sound = new Audio("./sounds/crash.mp3"); //creating an Audio object
    sound.play();
} );


document.querySelectorAll(".drum")[6].addEventListener("click", function (){
    
    let sound = new Audio("./sounds/kick-bass.mp3"); //creating an Audio object
    sound.play();
} );*/