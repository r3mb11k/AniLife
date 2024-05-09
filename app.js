document.addEventListener('DOMContentLoaded', function() {
        const video = document.querySelector('.trailer__anime');
        const toggleSoundButton = document.querySelector('.mutebtn');

        toggleSoundButton.addEventListener('click', function() {
            if (video.muted) {
                video.muted = false;
                toggleSoundButton.textContent = '🔇';
            } else {
                video.muted = true;
                toggleSoundButton.textContent = '🔊';
            }
        });
    });


let vid = document.getElementById("trailer");
vid.volume = 0.3;