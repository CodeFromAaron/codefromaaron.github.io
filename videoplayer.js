function changeGif() {
    var img = document.querySelector(".head-float");
    var vidLoadIn = document.querySelector(".vid-load-in");
    var headHold = document.querySelector(".head-open-hold");
    var iframe = document.querySelector("iframe");
    var exitButton = document.querySelector(".exit-vid");
    var clientWork = document.querySelector(".client-work-btn");

    headHold.style.display = "none";
    vidLoadIn.style.display = "block"; // Show the vidLoadIn.gif
    vidLoadIn.src = vidLoadIn.src; // Reset the src to start the GIF from the beginning
    img.style.display = "none"; // Hide the headbobble gif
    clientWork.style.opacity = "0"; // Hide the client button
    clientWork.style.pointerEvents = "none";

    setTimeout(function () {
        vidLoadIn.style.display = "none"; // Hide the vidLoadIn.gif
        headHold.style.display = "block";
        iframe.style.opacity = 1; // Fade in the iframe
        exitButton.style.opacity = 1; // Fade in the exit button
        exitButton.style.pointerEvents = "auto";
        iframe.style.pointerEvents = "auto";        
        
    }, 3000); // Change back to headbobble gif after 3 seconds (3000 milliseconds)
}

function closeVid() {
    var img = document.querySelector(".head-float");
    var vidLoadIn = document.querySelector(".vid-load-in");
    var headHold = document.querySelector(".head-open-hold");
    var iframe = document.querySelector("iframe");
    var exitButton = document.querySelector(".exit-vid");

    vidLoadIn.style.display = "none"; // Hide the vidLoadIn.gif
    headHold.style.display = "none"; // Hide the HeadOpenHold.gif
    img.style.display = "block"; // Show the headbobble gif
    iframe.style.opacity = "0"; // Hide the iframe
    exitButton.style.opacity = "0"; // Hide the exit button
    exitButton.style.pointerEvents = "none";
    
    clientWork.style.opacity = 1; // Fade in the client button
    clientWork.style.pointerEvents = "auto";
    
    iframe.style.pointerEvents = "none"; // Disable pointer events for the iframe
}
