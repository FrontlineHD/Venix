// Function to search through the script cards
function searchScripts() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.script-card');

    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'flex'; // Show matching cards
        } else {
            card.style.display = 'none'; // Hide non-matching cards
        }
    });
}
