window.addEventListener('slideLoaded', function() {
    const buttons = document.querySelectorAll('.options button');
    const result = document.querySelector('.result');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.dataset.answer === 'C') {
                result.textContent = 'Correct!';
                result.style.color = 'green';
            } else {
                result.textContent = 'Incorrect. Try again.';
                result.style.color = 'red';
            }
        });
    });
});