

var audioConstants = Object.freeze({
    audioUp: ['a', 'b'],
    audioDown: ['c', 'd']
});


var audioPlayer = function(audioArray, sampleNumber) {
    return audioArray.audioUp[sampleNumber];
}

console.log(audioPlayer(audioConstants, 0));
