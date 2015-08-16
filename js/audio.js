var tonic = new Audio('audio/1.mp3');
var dominant = new Audio('audio/5.mp3');
var minorThird = new Audio('audio/3Mi.mp3');
var majorThird = new Audio('audio/3Ma.mp3');
var bg = new Audio('audio/bg.mp3');

tonic.play();
bg.play();

var audioConstants = Object.freeze({
    audioUp: [tonic, majorThird, dominant],
    audioDown: [tonic, minorThird, dominant]
});

var scales = function (type) {
    if (type == "major") {
        return audioConstants.audioUp;
    } else if (type == "minor") {
        return audioConstants.audioDown;
    }
}

var audioPlayer = function(audioArray, mode, sampleNumber) {
    var scale = scales(mode);
    return scale[sampleNumber];
}
