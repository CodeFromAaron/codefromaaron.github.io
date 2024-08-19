                var contents = document.querySelector(".center-image-container");
                var aboutMe = document.querySelector(".about-me");
                var headFloat = document.querySelector(".head-float");

                window.addEventListener("load", function() {
                    // Step 1: Fade in the center-image-container
                    contents.style.opacity = 1;

                    // Step 2: Fade in the about-me div after a delay (e.g., 1 second)
                    setTimeout(function() {
                        aboutMe.style.transition = "opacity 2s";
                        aboutMe.style.opacity = 1;
                        aboutMe.style.pointerEvents = "auto"; // Allow interaction when visible
                        aboutMe.style.visibility = "visible"; // Ensure it's visible
                    }, 1000);

                    // Step 3: Fade out the about-me div and fade in head-float (e.g., 5 seconds later)
                    setTimeout(function() {
                        aboutMe.style.opacity = 0;
                        aboutMe.style.pointerEvents = "none"; // Disable interaction after fading out
                        setTimeout(function() {
                            aboutMe.style.visibility = "hidden"; // Hide it from the layout after fade-out
                            headFloat.style.transition = "opacity 2s";
                            headFloat.style.opacity = 1;
                        }, 1000); // Wait for fade-out to complete before setting visibility and fading in head-float
                    }, 6000); // 1 second delay + 5 seconds to fade out
                });
