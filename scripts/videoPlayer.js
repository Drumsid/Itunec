export const videoPlayerInit = () => {
    // video-player
    // video-button__play
    // video-button__stop
    // video-time__passed
    // video-progress
    // video-time__total
    const videoPlayer = document.querySelector('.video-player');
    const videoBtnPlay = document.querySelector('.video-button__play');
    const videoBtnStop = document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimeTotal = document.querySelector('.video-time__total');

    const toggleIcon = () => {
        if (videoPlayer.paused) {
            videoBtnPlay.classList.remove('fa-pause');
            videoBtnPlay.classList.add('fa-play');
        } else {
            videoBtnPlay.classList.remove('fa-play');
            videoBtnPlay.classList.add('fa-pause');
        }
    }

    const togglePlay = () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
        toggleIcon();
    }

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        toggleIcon();
    }

    videoPlayer.addEventListener('click', togglePlay);
    videoBtnPlay.addEventListener('click', togglePlay);

    videoBtnStop.addEventListener('click', stopPlay);
}