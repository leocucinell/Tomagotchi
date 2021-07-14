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
            buttons: ["Temperature"],
            image: "../assets/Frog Egg.png"
        },
        {
            name: "Tadpole stage",
            progressBars: ["Temperature", "Food"],
            buttons: ["Temperature", "Food"],
            image: "../assets/tadpole.png"
        },
        {
            name: "Froglett stage",
            progressBars: ["Temperature", "Food", "Water"],
            buttons: ["Temperature", "Food", "Water"],
            image: "../assets/froglett.png"
        },
        {
            name: "Frog Stage",
            progressBars: ["Temperature", "Food", "Water", "Exercise"],
            buttons: ["Temperature", "Food", "Water", "Exercise"],
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
        //frog is in the EGG STAGE
        renderStage(mainGame.stages[0]);
    } else if(mainGame.currentTime > 30 && mainGame.currentTime <= 60){
        //frog is in the TADPOLE STAGE
        renderStage(mainGame.stages[1]);
    } else if(mainGame.currentTime > 60 && mainGame.currentTime <= 120){
        //frog is in the FROGLETT STAGE
        renderStage(mainGame.stages[2]);
    } else {
        //frog is in the FROG STAGE (indefinite untill mainGame.isDead == true)
        renderStage(mainGame.stages[3]);
    }

}

/* SECTION: Render Helper Methods
    NOTE: This section is to organize the render of the different stages of frog lifecycle
    the current Stage is going to be the object stage from the mainGame OBJ. this is to 
    isolate the amount of times the mapping of progress or button tags occurs.
*/
function renderStage(currentStage){
    //.progress-container .buttons-container
    //if the length of the buttons container is greater than the stage buttons length, dont do anything
    //else, append the last element of the array to the buttons container
    const $btnsLength = $(".buttons-container").children().length;
    if($btnsLength < currentStage.buttons.length){
        const currentBtn = currentStage.buttons[currentStage.buttons.length - 1];
        $(".buttons-container").append(`<button id="${currentBtn}-btn">${currentBtn}</button>`)
    }

    const $progressLength = $(".progress-container").children().length;
    if($progressLength < currentStage.progressBars.length){
        const currentProg = currentStage.progressBars[currentStage.progressBars.length - 1];
        $(".progress-container").append(`
        <div class="progress-bar" id="${currentProg}-bar">
            <h2>${currentProg}</h2>
            <progress class="progress-bar___main" max="100" value="100"></progress>
        </div>
        `);
    }
}
