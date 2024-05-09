// Кнопка звук вкл/выкл

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

// Кнопка полный экран

    document.addEventListener('DOMContentLoaded', function() {
        var video = document.getElementById('trailer');
        var fullscreenButton = document.querySelector('.fullscreen-btn');
    
        fullscreenButton.addEventListener('click', function() {
            if (!document.fullscreenElement) {
                video.requestFullscreen().catch(err => {
                    alert(`Ошибка при попытке перейти в полноэкранный режим: ${err.message} (${err.name})`);
                });
            } else {
                document.exitFullscreen();
            }
        });
    });
    
// Кнопка play и pause

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('trailer');
    var playButton = document.querySelector('.trailer-play');
    var pauseButton = document.querySelector('.trailer-stop');

    playButton.addEventListener('click', function() {
        video.play();
    });

    pauseButton.addEventListener('click', function() {
        video.pause();
    });
});


// звук 0.3 по дефолту

let vid = document.getElementById("trailer");
vid.volume = 0.3;


