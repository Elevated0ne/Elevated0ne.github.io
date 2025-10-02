<style>
  .extra-text {
    display: none; /* hidden by default */
    margin-left: 1em;
    color: #555;
  }
  .expand-btn {
    cursor: pointer;
    color: blue;
    margin-left: 5px;
  }
</style>

<div class="expandable-line">
  <p>
    <a href="link1" target="_blank">First item</a>
    <span class="expand-btn">[+]</span>
  </p>
  <p class="extra-text">Hidden content for the first item.</p>
</div>

<div class="expandable-line">
  <p>
    <a href="link2" target="_blank">Second item</a>
    <span class="expand-btn">[+]</span>
  </p>
  <p class="extra-text">Hidden content for the second item.</p>
</div>

<div class="expandable-line">
  <p>
    <a href="link3" target="_blank">Third item</a>
    <span class="expand-btn">[+]</span>
  </p>
  <p class="extra-text">Hidden content for the third item.</p>
</div>

<script>
  document.querySelectorAll(".expand-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const extraText = btn.closest(".expandable-line").querySelector(".extra-text");

      if (extraText.style.display === "block") {
        extraText.style.display = "none";
        btn.textContent = "[+]"; 
      } else {
        extraText.style.display = "block";
        btn.textContent = "[-]";
      }
    });
  });
</script>


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

    
