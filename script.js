function toggleText(id) {
    const extraText = document.getElementById(id);
    const btn = extraText.previousElementSibling.querySelector('.expand-btn');
    if (extraText.style.display === 'none') {
        extraText.style.display = 'block';
        btn.textContent = '[-]';  // Change the button to show a collapse option
    } else {
        extraText.style.display = 'none';
        btn.textContent = '[+]';  // Change the button back to show expand option
    }
}
