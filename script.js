const heartButton = document.querySelector('.heart-button');

heartButton.addEventListener('click', () => {
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.7 },
        colors: ['#FFD700', '#FF69B4', '#8B4513']
    });
    
    // Add any additional click actions here
});

// Optional tilt effect
window.addEventListener('deviceorientation', (e) => {
    const tilt = Math.min(15, e.beta / 3);
    document.querySelector('.card').style.transform = 
        `rotateX(${tilt}deg)`;
});