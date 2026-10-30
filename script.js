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
    let image = "";

    // Choice 1: Kitchen
    if (room === "kitchen") {

        title = "The Kitchen";
        icon = "🍞";
        image = "images/kitchen.jpg";

        if (checkedKitchen === false) {
            checkedKitchen = true;
            clues = clues + 1;

            story = "Miso is not here, but you find crumbs near the bread on the counter. One clue found!";
        } else {
            story = "You already searched the kitchen. There are no new clues.";
        }

    // Choice 2: Garden
    } else if (room === "garden") {

        title = "The Garden";
        icon = "🌿";
        image = "images/garden.jpg";

        if (checkedGarden === false) {
            checkedGarden = true;
            clues = clues + 1;

            story = "Miso is not in the garden, but you notice a few orange hairs on one of the garden chairs. Another clue found!";
        } else {
            story = "You already searched the garden. There are no new clues.";
        }

    // Choice 3: Bedroom
    } else if (room === "bedroom") {

        icon = "🐱";
        gameFinished = true;
        image = "images/found-cat.jpg";

        // Different endings based on previous choices.
        if (clues === 2) {
            title = "Great Detective!";
            story = "You followed both clues and found Miso sleeping on the bed. Mystery solved!";

        } else if (clues === 1) {
            title = "You Found Miso!";
            story = "With one clue, you discover Miso sleeping on the bed. Good job!";

        } else {
            title = "A Lucky Guess!";
            story = "You went straight to the bedroom and found Miso asleep on the bed. What a surprise!";
        }

        // Stop the game after finding Miso.
        document.getElementById("kitchen-btn").disabled = true;
        document.getElementById("garden-btn").disabled = true;
        document.getElementById("bedroom-btn").disabled = true;
    }

    // Update the webpage.
    document.getElementById("scene-icon").textContent = icon;
    document.getElementById("scene-image").src = image;
    document.getElementById("result-title").textContent = title;
    document.getElementById("result-text").textContent = story;

    document.getElementById("search-count").textContent = searches;
    document.getElementById("clue-count").textContent = clues;
}

// Restart the story.
function restartStory() {

    searches = 0;
    clues = 0;

    checkedKitchen = false;
    checkedGarden = false;
    gameFinished = false;

    // Reset text and image.
    document.getElementById("scene-icon").textContent = "🐾";
    document.getElementById("scene-image").src = "images/cover-cat.jpg";
    document.getElementById("result-title").textContent = "Start Your Search";
    document.getElementById("result-text").textContent = "Click a room to see what happens.";

    // Reset numbers.
    document.getElementById("search-count").textContent = "0";
    document.getElementById("clue-count").textContent = "0";

    // Enable buttons again.
    document.getElementById("kitchen-btn").disabled = false;
    document.getElementById("garden-btn").disabled = false;
    document.getElementById("bedroom-btn").disabled = false;
}