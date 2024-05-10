document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('trailer');
    const muteButton = document.querySelector('.mutebtn');
    const fullscreenButton = document.querySelector('.fullscreen-btn');
    const playButton = document.querySelector('.trailer-play');
    const pauseButton = document.querySelector('.trailer-stop');

    muteButton.addEventListener('click', function() {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? '🔊' : '🔇';
    });

    fullscreenButton.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            video.requestFullscreen().catch(err => {
                alert(`Ошибка при попытке перейти в полноэкранный режим: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    playButton.addEventListener('click', function() {
        video.play();
    });

    pauseButton.addEventListener('click', function() {
        video.pause();
    });

    video.volume = 0.3;



    });

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.getElementById("navbar").classList.add("blur");
        } else {
            document.getElementById("navbar").classList.remove("blur");
        }
    }
    
