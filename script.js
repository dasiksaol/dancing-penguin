document.addEventListener('DOMContentLoaded', function() {
    const gifBoxes = document.querySelectorAll('.gif-box');

    gifBoxes.forEach(gifBox => {
        const img = gifBox.querySelector('img');
        if (!img){
            const gifUrl = gifBox.getAttribute('data-gif');
            const gifElement = document.createElement('img');
            gifElement.src = gifUrl;
            gifElement.alt = 'GIF';
            gifElement.style.maxWidth = '100%';
            gifElement.style.maxHeight = '100%';
            gifBox.appendChild(gifElement);
        }
        else {
            img.style.display = img.style.display === 'none' ? 'block' : 'none';
        }
    });
});