
const display=document.getElementById("display");

function appendToDisplay(input){
    display.value+=input;
}

function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
// function ding() {
//     let sound = new  Audio("click_sound.wav");  
//     sound.play();
// }

// document.getElementsByTagName("button").addEventListener("click", ding);
const audio = new Audio("click_sound.wav");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});