var audio = new Audio('audio/1.mp3');
audio.play();

var audioConstants = Object.freeze({
    audioUp: ['a', 'b'],
    audioDown: ['c', 'd']
});


var audioPlayer = function(audioArray, sampleNumber) {
    return audioArray.audioUp[sampleNumber];
}

console.log(audioPlayer(audioConstants, 0));
