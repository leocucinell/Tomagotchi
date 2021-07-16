console.log("Hello Pond!")
console.log($);

//getting random frog facts to display on screen (every 5 seconds cycle)
const frogFacts = [
    "Frogs absorb water through their skin so they don't need to drink.",
    "Frogs can lay as many as 4,000 eggs in frogspawn.",
    "The eyes and nose of a frog are on top of its head so it can breathe and see when most of its body is under the water.",
    "Frogs have long back legs and webbed feet for jumping and swimming.",
    "Certain frogs can jump up to 20 times their own body length in a single leap.",
    "Frogs usually eat meat (bugs and worms) and swallow their food whole.",
    "The world's biggest frog is the goliath frog from Cameroon in West Africa. Their body can be one-foot long.",
    "The smallest frogs in the world are less than half-an-inch long.",
    "In the Seychelles, there is a male frog that carries its young around on its back until they become adults.",
    "People who study frogs and toads are called herpetologists. Herpetology is the study of amphibians and reptiles.",
    "Frog bones form a new ring every year when the frog is hibernating, just like trees do. Scientists can count these rings to discover the age of the frog.",
    "Because frogs come out in the rain, people used to think that they fell to earth in the rain! And in nineteenth century England, people tried catching them to prove it.",
    "One type of desert frog can wait as long as seven years for water by surrounding itself in a type of transparent bag that becomes its first meal once the rain comes.",
    "Amphibians' eyes come in all shapes and sizes. Some even have square or heart shaped pupils. But amphibians don't see color -- they only see in black or white.",
    "The golden dart frog is the most poisonous frog on earth and the skin of one frog could kill up to 1,000 people.",
    "In recent years, a painkiller with 200 times the power of morphine has been found in the skin of a frog.",
    "The male Darwins Frog takes its mate's eggs into its mouth as soon as they show signs of life and they stay there until they emerge as fully grown froglets.",
    "Frogs cannot live in the sea or any salt water.",
    "There are more than 4,000 types of amphibians in the world, but Europe has very few--only 45 species.",
    "Many of the most brightly colored tropical frogs are colored in this way to warn predators that they are poisonous."
];
function getFrogFact(){
    const num = Math.floor(Math.random() * frogFacts.length);
    return frogFacts[num];
}

/* SECTION: The Game Object 
    NOTE: This object contains all the different stages of the frogs life
*/
const mainGame = {
    userFrog: "Hoppy",
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
    currentFact: getFrogFact(),
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
    //$(".welcome-screen").css("display", "none");

    $(".welcome-screen").animate({opacity: 0}, 1000, function(){
        $(".welcome-screen").css("display", "none");
    });
    mainGame.timer = setInterval(game, 1000);
    //run the game code in an interval
     
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
    if(mainGame.currentTime <= 30){
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

    //update the page for the User.
    updateBars();

    //check the progress bars for any zeros
    checkZeros();
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
            <progress id="${currentProg}" class="progress-bar___main" max="100" value="100"></progress>
        </div>
        `);
    }


    //display the correct character & frog fact if time % 5 == 0
    if(mainGame.currentTime % 8 == 0){
        mainGame.currentFact = getFrogFact();
    }
    $(".character-container").html(`
        <img src="${currentStage.image}" alt="Frog Egg">
        <h3 id="pet-frog">${mainGame.userFrog}</h3>
        <button class="pet-button">Pet</button>
        <p class="frog fact">${mainGame.currentFact}</p>
    `);
}

/**
 * description: This page updates the progress bars currently on the page.
 */
function updateBars(){
    //grab a hold of each progress bar on the screen.
    // const currentValue = $(".progress-bar___main").val();
    // $(".progress-bar___main").val(currentValue - 10);

    //loop through the list of children in the progress container
    //save the current value the have (probably in mainGame) and subtract ten from it each second
    $(".progress-container").children().each(function(){
        const current = $(this).children("progress");
        const currentValue = current.val();
        current.val(currentValue - 10);
    });
}

function checkZeros(){
    $(".progress-container").children().each(function(){
        const current = $(this).children("progress");
        const currentValue = current.val();
        if(currentValue == 0){
            //take all Items off screen.
            //display grogu eating frog.
            $("body").empty();
            $("body").append(renderEndScreen);
        }
    });
}

function renderEndScreen(){
    //<button id="play-again___button">play again?</button> //FIXME: Will when working on button
    return `
        <div class="end-screen">
            <h1>Oh No!</h1>
            <h3>Baby yoda ate ${mainGame.userFrog}!</h3>
            <img src="assets/endScreen.png" alt="Baby Yoda eating frog">
            <p>refresh the page to play again</p>
        </div>
    `;
}

/* SECTION: Event Listeners for the buttons to increase the time of their respective progBar
    NOTE: just need to select the correct bars based on the clicked buttons
        - calling the event listener on the static parent to its dynamically created children
*/
$(".buttons-container").on("click", "button", function(event){
    //If a button is clicked, update the value that the progress has to 100 again.
    const current = $(`#${event.currentTarget.innerText}-bar`).children("progress").val()
    $(`#${event.currentTarget.innerText}-bar`).children("progress").val(current + 20);
});

//FIXME: Reload game event listener not attaching to the .end-screen #play-again___button
$(".end-screen").on("click", "button", function(event){
    console.log("~~~~Hello!~~~~ " + event);
    // $(".welcome-screen").animate({opacity: 1}, 1000, function(){
    //     $(".welcome-screen").css("display", "block");
    // });
    // mainGame.timer = setInterval(game, 1000);
});

$(".character-container").on("click", "button", function(){
    //grab the image 
    const $charImage = $(".character-container img");
    $charImage.effect("bounce", {times:3}, 300)
})

