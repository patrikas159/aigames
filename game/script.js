function loadGame(gameName) {
    const gameModal = document.getElementById("game-modal");
    const gameFrame = document.getElementById("game-frame");

    let gameSrc = "";

    switch (gameName) {
        case "game1":
            gameSrc = "games/game1.html";
            break;
        case "game2":
            gameSrc = "games/game2.html";
            break;
        case "game3":
            gameSrc = "games/game3.html";
            break;
        default:
            alert("Game not found!");
            return;
    }

    gameFrame.src = gameSrc;
    gameModal.style.display = "flex"; // Show the modal
    document.body.classList.add("blurred"); // Add blur effect to background
}

// Function to close the game modal
function closeGame() {
    document.getElementById("game-modal").style.display = "none";
    document.getElementById("game-frame").src = ""; // Stop the game when closed
    document.body.classList.remove("blurred"); // Remove background blur
}

// Function to show the notice message on page load
function showNotice() {
    document.getElementById("notice").style.display = "flex";
}

// Close the notice message
function closeNotice() {
    document.getElementById("notice").style.display = "none";
}
