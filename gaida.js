var notes = {
    a: {},
    b: {},
    c: {},
    d: {},
    e: {},
    f: {},
    g: {},
}

Object.keys(notes).forEach((key, i) => {
    notes[key].sound = new Howl({
        src: ['samples/' + key + '.mp3'],
        loop: true
    })
});

$('button').on('mousedown', (event) => {
    var id = $(event.target).attr('id');
    notes[id].sound.play();
});
$('button').on('mouseup', (event) => {
    var id = $(event.target).attr('id');
    notes[id].sound.fade(1, 0, 500);
})