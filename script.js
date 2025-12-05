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
  /* When active, show the text */
  .expandable-line.active .extra-text {
    display: block;
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
      const container = btn.closest(".expandable-line");
      container.classList.toggle("active");

      // Update button text
      if (container.classList.contains("active")) {
        btn.textContent = "[-]";
      } else {
        btn.textContent = "[+]";
      }
    });
  });
</script>

    .expandable-line {
    margin-bottom: 10px;
}

/* Hide the extra text by default */
.extra-text {
    display: none;
    margin-left: 20px;
}

/* Cursor hint for the [+] */
.expand-btn {
    cursor: pointer;
    margin-left: 8px;
    color: blue;
}

.expandable-line.open .extra-text {
    display: block;
}

