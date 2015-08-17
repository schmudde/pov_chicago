var tonic = new Audio('audio/1.mp3');
var dominant = new Audio('audio/5.mp3');
var minorThird = new Audio('audio/3Mi.mp3');
var majorThird = new Audio('audio/3Ma.mp3');
var majorSixth = new Audio('audio/6Ma.mp3');
var minorSixth = new Audio('audio/6Mi.mp3');
var majorSeventh = new Audio('audio/7Ma.mp3');
var minorSeventh = new Audio('audio/7Mi.mp3');
var octave = new Audio('audio/8.mp3');
var tritone = new Audio('audio/tritone.mp3');
var bg = new Audio('audio/bg.mp3');
bg.loop = true;

tonic.play();
bg.play();

var audioConstants = Object.freeze({
    audioUp: [tonic, majorThird, dominant, majorSixth, majorSeventh, octave],
    audioDown: [tonic, minorThird, tritone, minorSixth, minorSeventh, octave]
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
