// A very simple computer therapist
// first we define a set of possible answers
var answers = [
    "I see.",
    "Very interesting.",
    "Tell me more.",
    "I see. And what does that tell you?",
    "How does that make you feel?",
    "How do you feel when you say that?"
];

// then we define a function that picks a random answer
function answer() {
    var randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

// then we define a function that takes a question and returns an answer
function therapist(question) {
    // Randomly pick between a normal answer and a "why" answer
    if (Math.random() < 0.25) {
        return answer();
    } else {
        return why(question);
    }
}

// then we define a function that takes in a question and returns it with "why do you think that" prepended by the question with "I" replaced with "You"
function why(question) {
    // first make the whole question lowercase
    question = question.toLowerCase();

    // first replace "I'm" with "you are"
    question = question.replace("i'm", "you are");
    // then replace "I am" with "you are"
    question = question.replace("i am", "you are");
    // then replace "I" with "you", but only if it's a word by itself
    question = question.replace(/\bi\b/g, "you");
    // then replace "my" with "your"
    question = question.replace("my", "your");
    // then replace "me" with "you"
    question = question.replace("me", "you");

    return "Why do you think that " + question + "?";
}

// Now we just need to grab the input from the input box with id therapistInput and put the answer in the div with id therapistOutput
function ask() {
    var question = document.getElementById("therapistInput").value;
    document.getElementById("therapistOutput").innerHTML = therapist(question);
    // and clear out the input box
    document.getElementById("therapistInput").value = "";
}

// Well, that was easy. Now we just need to add an event listener to the button with id therapistButton
document.getElementById("therapistButton").addEventListener("click", ask);

// We should also trigger if the user hits enter in the input box
document.getElementById("therapistInput").addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("therapistButton").click();
    }
});