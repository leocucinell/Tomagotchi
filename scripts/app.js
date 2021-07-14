console.log("Hello Pond!")
console.log($);

/* SECTION: The Game Object 
    NOTE: This object contains all the different stages of the frogs life
*/
const mainGame = {
    userFrog: "Hoppy",
    userStage: 1, //I migtht not need this... just use the amount of time passed
    stages:[
        {
            name: "Egg stage",
            progressBars: ["Temperature"],
            buttons: ["Increase Temperature"],
            image: "../assets/Frog Egg.png"
        },
        {
            name: "Tadpole stage",
            progressBars: ["Temperature", "Food"],
            buttons: ["Increase Temperature", "Feed"],
            image: "../assets/tadpole.png"
        },
        {
            name: "Froglett stage",
            progressBars: ["Temperature", "Food", "Water Quality"],
            buttons: ["Increase Temperature", "Feed", "Clean Water"],
            image: "../assets/froglett.png"
        },
        {
            name: "Frog Stage",
            progressBars: ["Temperature", "Food", "Water Quality", "Exercise"],
            buttons: ["Increase Temperature", "Feed", "Clean Water", "Exercise"],
            image: "../assets/frog.png"
        }
    ],
    timer: null,
    currentTime: 0,
    isDead: false
}

/* SECTION: Welcome Screen
    NOTE:
        - first check to see if you can grab the input on user clicking the submit button
        - Then make the screen disapear and start the game
*/

$("#frog-submit").on("click", function(){
    const $nameField = $("#frog-name");
    //update the frog name
    mainGame.userFrog = $nameField.val();
    //make the welcome screen disapear
    $(".welcome-screen").css("display", "none");
    //update the text within the egg screen
    $("#pet-frog").text(mainGame.userFrog);
    //run the game code in an interval
    mainGame.timer = setInterval(game, 1000);
});

/* SECTION: The Game
    NOTE:
        - render a different amount of progress bars and buttons based on the amount of time passed
*/
const game = function(){
    //update the amount of time that the user has been playing the game
    mainGame.currentTime++;

    //check to see how much time has passed or if the frog died :-(
    //based on that time, render out different progress bars

    if(mainGame.isDead){
        //the frog has passed away because Grogu ate him
    } else if(mainGame.currentTime <= 30){
        console.log(mainGame.stages[0]);
    } else if(mainGame.currentTime > 30 && mainGame.currentTime <= 60){
        console.log(mainGame.stages[1]);
    } else if(mainGame.currentTime > 60 && mainGame.currentTime <= 120){
        console.log(mainGame.stages[2]);
    } else {
        console.log(mainGame.stages[3]);
    }

}

/* SECTION: Render Helper Methods
    NOTE: This section is to organize the render of the different stages of frog lifecycle
*/
function renderStage(currentStage){
    //append the correct amount of progress bars to the .progress-container
    //append the appropriate amount of buttons to the .buttons-container
    
}
