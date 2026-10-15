// =========================================
// HUBBYBABY'S BIRTHDAY WEBSITE 🎀
// All five pages and interactive elements
// =========================================


// PAGE ELEMENTS

const welcomeScreen = document.getElementById("welcomeScreen");
const letterScreen = document.getElementById("letterScreen");
const memoriesScreen = document.getElementById("memoriesScreen");
const lettersScreen = document.getElementById("lettersScreen");
const finalScreen = document.getElementById("finalScreen");

const openButton = document.getElementById("openButton");
const envelope = document.getElementById("envelope");
const envelopeContainer = document.getElementById("envelopeContainer");
const envelopeHint = document.getElementById("envelopeHint");

const continueButton = document.getElementById("continueButton");
const nextMemoriesButton = document.getElementById("nextMemoriesButton");
const finalSurpriseButton = document.getElementById("finalSurpriseButton");


// =========================================
// GENERAL PAGE NAVIGATION
// =========================================

function showPage(currentPage, nextPage) {

    if (!currentPage || !nextPage) {
        return;
    }

    currentPage.classList.add("fade-out");

    setTimeout(function () {

        currentPage.classList.add("hidden");
        currentPage.classList.remove("fade-out");

        nextPage.classList.remove("hidden");
        nextPage.classList.add("fade-in");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(function () {
            nextPage.classList.remove("fade-in");
        }, 700);

    }, 500);
}


// =========================================
// PAGE 1: OPEN THE SURPRISE
// =========================================

openButton.addEventListener("click", function () {

    showPage(welcomeScreen, letterScreen);

});


// =========================================
// PAGE 2: OPEN THE ENVELOPE
// =========================================

function openEnvelope() {

    if (envelopeContainer.classList.contains("opened")) {
        return;
    }

    envelopeContainer.classList.add("opened");

    envelopeHint.textContent =
        "a little piece of my heart, just for you ♡";

    setTimeout(function () {

        continueButton.classList.remove("hidden");
        continueButton.classList.add("fade-in");

    }, 1000);

}

envelope.addEventListener("click", openEnvelope);


// Make the seal clickable too.

const envelopeSeal = document.getElementById("envelopeSeal");

envelopeSeal.addEventListener("click", function (event) {

    event.stopPropagation();
    openEnvelope();

});


// =========================================
// PAGE 2 TO PAGE 3
// =========================================

continueButton.addEventListener("click", function () {

    showPage(letterScreen, memoriesScreen);

});


// =========================================
// PAGE 3: CLICKABLE SCRAPBOOK PHOTOS
// =========================================

const photoViewer = document.getElementById("photoViewer");
const expandedPhoto = document.getElementById("expandedPhoto");
const expandedCaption = document.getElementById("expandedCaption");
const closePhotoViewer = document.getElementById("closePhotoViewer");

const memoryImages = document.querySelectorAll(".memory-photo img");


memoryImages.forEach(function (img) {

    img.addEventListener("click", function () {

        expandedPhoto.src = img.src;
        expandedPhoto.alt = img.alt;

        const card = img.closest(".memory-card");
        const caption = card.querySelector(".memory-caption");

        expandedCaption.textContent = caption.textContent.trim();

        photoViewer.classList.remove("hidden");

        document.body.style.overflow = "hidden";

    });

});


function closeViewer() {

    photoViewer.classList.add("hidden");

    expandedPhoto.src = "";

    document.body.style.overflow = "";

}


closePhotoViewer.addEventListener("click", closeViewer);


photoViewer.addEventListener("click", function (event) {

    if (event.target === photoViewer) {
        closeViewer();
    }

});


// =========================================
// PAGE 3 TO PAGE 4
// =========================================

nextMemoriesButton.addEventListener("click", function () {

    showPage(memoriesScreen, lettersScreen);

});


// =========================================
// PAGE 4: INTERACTIVE OPEN-WHEN LETTERS
// =========================================

const messagePopup = document.getElementById("messagePopup");
const popupTitle = document.getElementById("popupTitle");
const popupMessage = document.getElementById("popupMessage");
const closeMessagePopup = document.getElementById("closeMessagePopup");

const openWhenCards = document.querySelectorAll(".open-when-card");


// These are the messages inside each letter.

const messages = {

    "miss-you": {
        title: "Missing me already? 💌",

        message:
            "First of all, excuse me. How dare you miss me this much? 😭💕\n\n" +
            "Okay, jokes apart, if I could be next to you right now, " +
            "I'd probably annoy you until you forgot why you were missing me.\n\n" +
            "Until then, remember all our silly conversations, our laughs, " +
            "and all the little memories that belong only to us.\n\n" +
            "Distance can steal a hug for a while, but it can't take away " +
            "what our friendship means to me.\n\n" +
            "Now smile a little, okay? Your favourite person says so. ♡"
    },


    "sad": {
        title: "Hey, come here. 🫂",

        message:
            "Hey, you. Take a little breath.\n\n" +
            "You don't have to pretend to be okay every single day. " +
            "You are allowed to feel tired, confused, sad, or simply not yourself.\n\n" +
            "One difficult day doesn't define your life, and one bad moment " +
            "doesn't take away all the good things that are waiting for you.\n\n" +
            "Please be as kind to yourself as you are to the people you love. " +
            "You deserve that kindness too.\n\n" +
            "If you need someone to listen, remember that you don't always " +
            "have to find the perfect words. Sometimes, just saying " +
            "'I'm not okay' is enough.\n\n" +
            "Sending you the biggest virtual hug. You matter. Always. ♡"
    },


    "special": {
        title: "A little reminder of your worth 🎀",

        message:
            "In case nobody has reminded you lately, let me do it.\n\n" +
            "You are so much more than your achievements, your mistakes, " +
            "your appearance, or what other people think of you.\n\n" +
            "You have your own little magic. The way you laugh, the way " +
            "you care, the way you exist in the lives of people who love you.\n\n" +
            "You don't have to be perfect to be loved. You don't have to " +
            "prove your worth by doing everything right.\n\n" +
            "I hope you see yourself with the same kindness that the people " +
            "who love you see in you.\n\n" +
            "And yes, that includes me. You are precious to me, HubbyBaby. ♡"
    },


    "hug": {
        title: "Your virtual hug has arrived 💕",

        message:
            "Come here. No questions. Just a hug. 🫂\n\n" +
            "Imagine me wrapping my arms around you and squeezing you " +
            "until all the stress of the day feels a little smaller.\n\n" +
            "You can stay in this imaginary hug for as long as you need. " +
            "No explanations, no pretending, no pressure to say anything.\n\n" +
            "Sometimes we all need a reminder that we don't have to " +
            "handle every little thing alone.\n\n" +
            "So here's your hug, your reminder, and a little piece of my heart.\n\n" +
            "If I were there, I'd probably refuse to let go immediately. " +
            "You know how I am. 😂💕"
    }

};


// Open the correct message when a letter button is clicked.

openWhenCards.forEach(function (card) {

    const button = card.querySelector(".open-letter-button");

    button.addEventListener("click", function () {

        const messageKey = card.dataset.message;
        const selectedMessage = messages[messageKey];

        if (!selectedMessage) {
            return;
        }

        popupTitle.textContent = selectedMessage.title;
        popupMessage.textContent = selectedMessage.message;

        messagePopup.classList.remove("hidden");

        document.body.style.overflow = "hidden";

    });

});


// Close the message popup.

function closeMessage() {

    messagePopup.classList.add("hidden");

    document.body.style.overflow = "";

}


closeMessagePopup.addEventListener("click", closeMessage);


messagePopup.addEventListener("click", function (event) {

    if (event.target === messagePopup) {
        closeMessage();
    }

});


// =========================================
// PAGE 4 TO PAGE 5
// =========================================

finalSurpriseButton.addEventListener("click", function () {

    showPage(lettersScreen, finalScreen);

});


// =========================================
// PAGE 5: BLOW THE BIRTHDAY CANDLES
// =========================================

const birthdayCake = document.getElementById("birthdayCake");
const cakeInstruction = document.getElementById("cakeInstruction");
const wishButton = document.getElementById("wishButton");
const finalMessage = document.getElementById("finalMessage");


wishButton.addEventListener("click", function () {

    // Turn off the candle flames.

    birthdayCake.classList.add("blown");

    // Change the instruction.

    cakeInstruction.textContent =
        "Your wish is on its way to the universe. ✨💗";

    // Hide the wish button.

    wishButton.classList.add("hidden");

    // Reveal the final birthday message.

    finalMessage.classList.remove("hidden");

    // Celebrate with a little burst of hearts.

    createHeartCelebration();

    // Bring the final message into view.

    setTimeout(function () {

        finalMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

});


// =========================================
// LITTLE HEART CELEBRATION
// =========================================

function createHeartCelebration() {

    const heartSymbols = ["♡", "♥", "💕", "💗", "✧", "୨୧"];

    for (let i = 0; i < 24; i++) {

        const heart = document.createElement("span");

        heart.classList.add("celebration-heart");

        heart.textContent =
            heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.zIndex = "2000";
        heart.style.pointerEvents = "none";
        heart.style.fontSize = (16 + Math.random() * 18) + "px";
        heart.style.color = ["#c8798d", "#e7a9b8", "#a95770"][
            Math.floor(Math.random() * 3)
        ];

        document.body.appendChild(heart);

        const horizontalMovement = (Math.random() - 0.5) * 220;
        const duration = 2500 + Math.random() * 2000;

        const animation = heart.animate(
            [
                {
                    transform: "translate(0, 0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${horizontalMovement}px, 105vh) rotate(360deg)`,
                    opacity: 0.1
                }
            ],
            {
                duration: duration,
                easing: "ease-in",
                fill: "forwards"
            }
        );

        animation.onfinish = function () {
            heart.remove();
        };

    }

}


// =========================================
// KEYBOARD ACCESSIBILITY
// =========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (!photoViewer.classList.contains("hidden")) {
            closeViewer();
        }

        if (!messagePopup.classList.contains("hidden")) {
            closeMessage();
        }

    }

});


// =========================================
// IMAGE ERROR HANDLING
// =========================================

// Show a clear placeholder if a photo cannot load.

memoryImages.forEach(function (img) {

    img.addEventListener("error", function () {

        img.style.display = "none";

        const placeholder = document.createElement("div");

        placeholder.className = "image-error-placeholder";

        placeholder.textContent = "add your memory photo here ♡";

        placeholder.style.display = "flex";
        placeholder.style.width = "100%";
        placeholder.style.height = "100%";
        placeholder.style.minHeight = "180px";
        placeholder.style.alignItems = "center";
        placeholder.style.justifyContent = "center";
        placeholder.style.padding = "15px";
        placeholder.style.background = "#f7e4e8";
        placeholder.style.color = "#a95770";
        placeholder.style.fontFamily = "Parisienne, cursive";
        placeholder.style.fontSize = "22px";
        placeholder.style.textAlign = "center";

        img.parentElement.appendChild(placeholder);

    });

});


// =========================================
// WEBSITE READY 🎀
// =========================================

console.log("HubbyBaby's birthday website is ready! 🎀💗");