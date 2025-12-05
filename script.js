document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const container = button.closest('.expandable-line');
        container.classList.toggle('open');

        // Change [+] to [-] when opened
        if (container.classList.contains('open')) {
            button.textContent = '[-]';
        } else {
            button.textContent = '[+]';
        }
    });
});
