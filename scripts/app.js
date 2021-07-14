console.log("Hello Pond!")
console.log($);
/* SECTION: Welcome Screen
    NOTE:
        - first check to see if you can grab the input on user clicking the submit button
        - Then make the screen disapear
*/
const $nameField = $("#frog-name");
let userFrog = "Hoppy";
$("#frog-submit").on("click", function(){
    //update the frog name
    userFrog = $nameField.val();
    //make the welcome screen disapear
    $(".welcome-screen").css("display", "none");
    //update the text within the egg screen
    $("#pet-frog").text(userFrog);
});

/* SECTION: Egg Screen
    NOTE:
        - See if you can display the input name that the user chose from welcome
*/
