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
            image: "assets/Frog Egg.png"
        },
        {
            name: "Tadpole stage",
            progressBars: ["Temperature", "Food"],
            buttons: ["Temperature", "Food"],
            image: "assets/tadpole.png"
        },
        {
            name: "Froglett stage",
            progressBars: ["Temperature", "Food", "Water"],
            buttons: ["Temperature", "Food", "Water"],
            image: "assets/froglett.jpeg"
        },
        {
            name: "Frog Stage",
            progressBars: ["Temperature", "Food", "Water", "Exercise"],
            buttons: ["Temperature", "Food", "Water", "Exercise"],
            image: "assets/frog.jpeg"
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
    NOTE: if the length of the buttons container is greater than the stage buttons length, 
    dont do anything else, append the last element of the array to the buttons container
*/
function renderStage(currentStage){
    //Adding Stage Buttons
    const $btnsLength = $(".buttons-container").children().length;
    if($btnsLength < currentStage.buttons.length){
        //append the button
        const currentBtn = currentStage.buttons[currentStage.buttons.length - 1];
        $(".buttons-container").append(`<button id="${currentBtn}-btn">${currentBtn}</button>`);
    }

    //Adding Stage Progress Bars
    const $progressLength = $(".progress-container").children().length;
    if($progressLength < currentStage.progressBars.length){
        const currentProg = currentStage.progressBars[currentStage.progressBars.length - 1];
        $(".progress-container").append(`
        <div class="progress-bar" id="${currentProg}-bar">
            <h2>${currentProg}</h2>
            <progress id="FIXMe" class="progress-bar___main" max="100" value="100"></progress>
        </div>
        `);
    }

    //display the correct character
    $(".character-container").html(`
        <img src="${currentStage.image}" alt="Frog Egg">
        <h3 id="pet-frog">${mainGame.userFrog}</h3>
    `);
}

/* SECTION: Event Listeners for the buttons to increase the time of their respective progBar
    NOTE: just need to select the correct bars based on the clicked buttons
        - calling the event listener on the static parent to its dynamically created children
*/
$(".buttons-container").on("click", "button", function(event){
    //event.currentTarget.innerText -> The inner text of the button
    //console.log($(`#${event.currentTarget.innerText}-bar`)); -> Grabs the corresponding bar div
})

