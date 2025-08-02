let userInput = '';

function checkName() {
    const nameInput = document.getElementById('name-input').value.trim();
    userInput = nameInput; // Store the input
    if (nameInput.toLowerCase() === 'yahir') {
        alert('Cosas que te gustan de mí: ' + userInput); // Simulate receiving input
        showPage('card-page');
    } else {
        alert('Por favor, ingresa el nombre correcto: Yahir');
    }
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    if (pageId === 'song-page') {
        createHeartsAndBubbles();
    }
}

function createHeartsAndBubbles() {
    const phrases = [
        'Te amo con todo mi corazón',
        'Eres mi todo',
        'Siempre contigo',
        'Mi amor por ti crece cada día',
        'Eres mi sueño hecho realidad'
    ];

    setInterval(() => {
        // Create Heart
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${5 + Math.random() * 3}s`;
        document.body.appendChild(heart);

        // Create Bubble
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.textContent = phrases[Math.floor(Math.random() * phrases.length)];
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${6 + Math.random() * 4}s`;
        document.body.appendChild(bubble);

        // Remove elements after animation
        setTimeout(() => {
            heart.remove();
            bubble.remove();
        }, 8000);
    }, 1000);
}