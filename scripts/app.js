console.log("Hello Pond!")
console.log($);

/* SECTION: The Game Object 
    NOTE: This object contains all the different stages of the frogs life
*/
const mainGame = {
    userFrog: "Hoppy",
    eggStage:{
        progressBars: ["Temperature"],
        buttons: ["Increase Temperature"],
        image: "../assets/Frog Egg.png"
    },
    tadpoleStage:{
        progressBars: ["Temperature", "Food"],
        buttons: ["Increase Temperature", "Feed"],
        image: "../assets/tadpole.png"
    },
    froglettStage:{
        progressBars: ["Temperature", "Food", "Water Quality"],
        buttons: ["Increase Temperature", "Feed", "Clean Water"],
        image: "../assets/froglett.png"
    },
    frogStage:{
        progressBars: ["Temperature", "Food", "Water Quality", "Exercise"],
        buttons: ["Increase Temperature", "Feed", "Clean Water", "Exercise"],
        image: "../assets/frog.png"
    },
    timer: setInterval(function(){
        console.log("GAME TIMER")
    }, 1000)
}

/* SECTION: Welcome Screen
    NOTE:
        - first check to see if you can grab the input on user clicking the submit button
        - Then make the screen disapear
*/

$("#frog-submit").on("click", function(){
    const $nameField = $("#frog-name");
    //update the frog name
    mainGame.userFrog = $nameField.val();
    //make the welcome screen disapear
    $(".welcome-screen").css("display", "none");
    //update the text within the egg screen
    $("#pet-frog").text(mainGame.userFrog);
    game();
});

/* SECTION: Egg Screen
    NOTE:
        - See if you can display the input name that the user chose from welcome
*/
function game(){
    //make a timer that will deplete the progress bar by 10% every second
    const progressTimer = setInterval(function(){
        //take the progress timer and subtract 10% off it
        const currentValue = $(".progress-bar___main").val();
        $(".progress-bar___main").val(currentValue - 10);
    }, 1000);
}

/* SECTION: Game functionality methods */
$()