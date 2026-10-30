
let searches = 0;
let clues = 0;

let checkedKitchen = false;
let checkedGarden = false;
let gameFinished = false;

// This function runs when a room button is clicked.
function explore(room) {

    if (gameFinished === true) {
        return;
    }

    searches = searches + 1;

    let title = "";
    let story = "";
    let icon = "";

    // Choice 1: Kitchen
    if (room === "kitchen") {

        title = "The Kitchen";
        icon = "🍪";

        if (checkedKitchen === false) {
            checkedKitchen = true;
            clues = clues + 1;

            story = "Miso is not here, but you find some crumbs near the food bowl. One clue found!";
        } else {
            story = "You already searched the kitchen. There are no new clues.";
        }

    // Choice 2: Garden
    } else if (room === "garden") {

        title = "The Garden";
        icon = "🌿";

        if (checkedGarden === false) {
            checkedGarden = true;
            clues = clues + 1;

            story = "You find tiny pawprints in the garden. Maybe Miso went back inside!";
        } else {
            story = "You already searched the garden. There are no new clues.";
        }

    // Choice 3: Bedroom
    } else if (room === "bedroom") {

        icon = "🐱";
        gameFinished = true;

        // Different endings based on previous choices.
        if (clues === 2) {

            title = "Great Detective!";
            story = "You followed both clues and found Miso sleeping under the blanket. Mystery solved!";

        } else if (clues === 1) {

            title = "You Found Miso!";
            story = "With one clue, you discover Miso sleeping on the bed. Good job!";

        } else {

            title = "A Lucky Guess!";
            story = "You went straight to the bedroom and found Miso asleep. What a surprise!";

        }

        // Stop the game after finding Miso.
        document.getElementById("kitchen-btn").disabled = true;
        document.getElementById("garden-btn").disabled = true;
        document.getElementById("bedroom-btn").disabled = true;
    }

    // Update the webpage.
    document.getElementById("scene-icon").textContent = icon;
    document.getElementById("result-title").textContent = title;
    document.getElementById("result-text").textContent = story;

    document.getElementById("search-count").textContent = searches;
    document.getElementById("clue-count").textContent = clues;

    // Automatically scroll to the result.
    document.querySelector(".result").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}

// Restart the story.
function restartStory() {

    searches = 0;
    clues = 0;

    checkedKitchen = false;
    checkedGarden = false;
    gameFinished = false;

    // Reset text.
    document.getElementById("scene-icon").textContent = "🐾";
    document.getElementById("result-title").textContent = "Start Your Search";
    document.getElementById("result-text").textContent = "Click a room to see what happens.";

    // Reset numbers.
    document.getElementById("search-count").textContent = "0";
    document.getElementById("clue-count").textContent = "0";

    // Enable buttons again.
    document.getElementById("kitchen-btn").disabled = false;
    document.getElementById("garden-btn").disabled = false;
    document.getElementById("bedroom-btn").disabled = false;

    // Return to the choices.
    document.querySelector(".choices").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}
