document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes');
    const noBtn = document.getElementById('no');
    const yesImg = document.querySelector('.hidden');
    const noImg = document.querySelector('.appearing');
    const question = document.querySelector('.main');

    yesImg.style.display = 'none';

    yesBtn.addEventListener('click', function() {
        yesImg.style.display = 'block';
        question.innerHTML = 'I Love You Too Yeeeaaaahhh';
        noImg.style.display = 'none';
    });

    // Apply smooth transition properties
    noBtn.style.transition = 'left 0.5s ease-out, top 0.5s ease-out';

    noBtn.addEventListener('mouseover', function() {
        const container = this.parentElement.parentElement; // Adjust as needed based on your structure
        const containerRect = container.getBoundingClientRect();
        const maxX = containerRect.width - this.offsetWidth;
        const maxY = containerRect.height - this.offsetHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        this.style.position = 'absolute';
        this.style.left = `${randomX}px`;
        this.style.top = `${randomY}px`;
    });
});
