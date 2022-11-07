const load = document.getElementById('choice');
load.addEventListener('change', update);

function update(event) {
    var area = document.getElementById('pick');
    var newMedia;
    var fileName = document.getElementById('choice').files[0].name;
    var fileSrc = URL.createObjectURL(event.target.files[0]);
    var fileExt = fileName.split('.')[1];
    if (fileExt === 'jpg' || fileExt === 'png') {
        newMedia = document.createElement('img');
        newMedia.type = 'image/*';
    } else if (fileExt === 'mp4' || fileExt === 'mkv') {
        newMedia = document.createElement('video');
        newMedia.type = 'video/*';
        newMedia.controls = 'controls';
    } else if (fileExt === 'm4a' || fileExt === 'mp3' || fileExt === 'flac') {
        newMedia = document.createElement('audio');
        newMedia.type = 'audio/*';
        newMedia.controls = 'controls';
    }

    newMedia.src = fileSrc;
    newMedia.width = '300';
    newMedia.height = '300';

    if (area.hasChildNodes()) {
        area.removeChild(area.firstChild);
    }
    document.getElementById('pick').appendChild(newMedia);
}
