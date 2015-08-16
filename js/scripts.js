var quotelist = [
  ["1) People are virtually afraid to say, ‘I want the death penalty.’ Well, I want it.","All life is worth saving.",1],
  ["2) Positive!","2) Negative!",0],
  ["3) People are virtually afraid to say, ‘I want the death penalty.’ Well, I want it.","All life is worth saving.",1],
  ["4) People are virtually afraid to say, ‘I want the death penalty.’ Well, I want it.","All life is worth saving.",1]
];



var scorepositive;
var scorenegative;

var questionnumber = 0;

$(document).ready(function(){
    displaynewquotes();
});

function displaynewquotes(){

    // 'fadeIn' the animation
    $( "#quote0" ).addClass('animated fadeIn');
    $( "#quote1" ).addClass('animated fadeIn');

    // Place in the new text
    $( "#quote0" ).text(quotelist[questionnumber][0]);
    $( "#quote1" ).text(quotelist[questionnumber][1]);

    // Once the animation complete, remove the 'fadeIn' class
    $('#quote0').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('animated fadeIn')
    });
    $('#quote1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('animated fadeIn')
    });
}

var nextQuestion = function(quote) {
    return function (bounceSide) {
        // 'bounceOut' the animation
        var classes = 'animated ' + bounceSide;
        $(quote).addClass(classes);

        // remove the 'bounceOut' animation class & display the new quotes
        $(quote).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass(classes)
            displaynewquotes();
        });
    }
}

function score () {

    if (quotelist[questionnumber][2] === 0){
      scorepositive++;
    }
    else if (quotelist[questionnumber][2] === 1){
      scorenegative++;
    }

    questionnumber++;
    console.log(questionnumber);

}

function video() {
    $("#video-content").show();
    $("#landing").hide();
}

$( "#quote0" ).click(function() {
  //add to the correct score based on which kind of quote this is.

  score();

  if (questionnumber < quotelist.length){
    var chosenQuote = nextQuestion('#quote0');
    chosenQuote("bounceOutLeft");
  }
  else{
      video();
  }
});


$( "#quote1" ).click(function() {
    //add to the correct score based on which kind of quote this is.
    score();

    if (questionnumber < quotelist.length){
        var chosenQuote = nextQuestion('#quote1');
        chosenQuote("bounceOutRight");
    } else {
        video();
    }
});


/*
$( "#negative" ).click(function() {
  var htmlString = neg[0];
  $( "#negative" ).text( htmlString );
});

$( "#positive" ).click(function() {
  var htmlString = $( pos ).html();
  $( pos ).text( htmlString );
});
*/
