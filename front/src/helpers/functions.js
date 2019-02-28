export function changeFav(pathFav, imageType) {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/' + imageType;
    link.rel = 'shortcut icon';
    link.href = pathFav;
    document.getElementsByTagName('head')[0].appendChild(link);
}

export function notificationVoice(pathAudioFile) {
    let audio = new Audio(pathAudioFile);
    audio.play();
}