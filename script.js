document.body.addEventListener('click', function(event) {
    if (event.target && event.target.matches('.expand-btn')) {
        const extraText = event.target.closest('.expandable-line').querySelector('.extra-text');
        if (extraText.style.display === '' || extraText.style.display === 'none') {
            extraText.style.display = 'block';
            event.target.textContent = '[-]'; // Change the button to collapse
        } else {
            extraText.style.display = 'none';
            event.target.textContent = '[+]'; // Change the button to expand
        }
    }
});

// Initialize the state of the buttons when the page loads
window.addEventListener('load', function() {
    const allExtraText = document.querySelectorAll('.extra-text');
    allExtraText.forEach(extraText => {
        extraText.style.display = 'none';  // Hide the extra text by default
    });



    const allButtons = document.querySelectorAll('.expand-btn');


    allButtons.forEach(button => {


        button.textContent = '[+]';  // Ensure the buttons show [+] initially


    });


});

// Random Quote API
async function loadQuote() {
  document.getElementById("content").innerText = "Loading...";
  let response = await fetch("https://api.quotable.io/random");
  let data = await response.json();
  document.getElementById("content").innerText = `"${data.content}" — ${data.author}`;
}

// Random Dog API
async function loadDog() {
  document.getElementById("content").innerText = "Loading...";
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let data = await response.json();
  document.getElementById("content").innerHTML = `<img src="${data.message}" alt="dog picture">`;
}

// Random Joke API
async function loadJoke() {
  document.getElementById("content").innerText = "Loading...";
  let response = await fetch("https://official-joke-api.appspot.com/random_joke");
  let data = await response.json();
  document.getElementById("content").innerText = `${data.setup} — ${data.punchline}`;
}

    
