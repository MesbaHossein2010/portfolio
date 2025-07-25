const hero = document.getElementById('hero');
const h2 = hero.querySelector('h2');

const messages = [
    "Hello I'm Hossein Mesbah",
    "Fullstack developer (maybe)",
    "Learning JavaScript",
    "Building cool stuff!"
];

let index = 0;

function changeText() {
    h2.style.opacity = 0; // fade out
    setTimeout(() => {
        index = (index + 1) % messages.length;
        h2.textContent = messages[index];
        h2.style.opacity = 1; // fade in
    }, 500); // after fade-out
}

// Start changing every 3 seconds
setInterval(changeText, 3000);

