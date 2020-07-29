export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        } else {
            radio.classList.add('play');
            radioStop.classList.add('fa-stop');
            radioStop.classList.remove('fa-play');
        }
    }

    const removeStroke = (elem) => {
        radioItem.forEach(li => {
            li.classList.remove('select');
            elem.classList.add('select');
        });
    }

    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        const parrent = target.closest('.radio-item');
        removeStroke(parrent);

        const title = parrent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title;

        const img = parrent.querySelector('.radio-img').getAttribute('src');
        radioCoverImg.setAttribute('src', img);

        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay();
    });
    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay();
    });

}