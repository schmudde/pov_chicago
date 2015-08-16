var quotelist = [
  ["&quot;Civilization is a method of living, an attitude of equal respect for all men.&quot;", "&quot;There was nothing left to do but uplift and civilize them.&quot;",0, "Jane Addams, 1919", "William McKinley, 1898"],

    ["&quot;We had to have a lot of tough conversations about class, race, privilege&quot;","&quot;Show me someone without and ego, and I'll show you a loser&quot;",0, "Kim Nieto, 2015", "Donald Trump, 2005"],


  ["&quot;What happens to any of us anywhere in the world, better be the business of us all&quot;","&quot;If you put aside personal responsibility, you are missing the core ingredient&quot;",0, "Mamie Till, 1960", "Rahm Emanuel, 2013"],


    ["&quot;Only when it is dark enough can you see the stars. We're not worried about it being dark.&quot;","&quot;People are virtually afraid to say, 'I want the death penalty' Well, I want it.&quot;",1, "Fred Hampton, 1969", "Donald Trump, 2009"],


  ["&quot;The mayor’s media office said, 'You embarrassed the Mayor, this is not appropriate.' And our response was, Well, this coal power plant in our neighborhood is not appropriate.'&quot;","&quot;Listen, you're in my house. You're not going to get a good response from me. No, no, no, no, no. Shhh. Shame on you. Escort this person out.&quot;",1, "Kim Nieto, 2015", "Barack Obama, 2015"]

];



var scorepositive = 0;
var scorenegative = 0;

var questionnumber = 0;

$(document).ready(function(){
    displaynewquotes();
});

function displaynewquotes(){

    // 'fadeIn' the animation
    $( "#quote0" ).addClass('animated fadeIn');
    $( "#quote1" ).addClass('animated fadeIn');


    // Place in the new text
    $( "#quote0" ).html(
        quotelist[questionnumber][0] + "<div class='attribution'>" + quotelist[questionnumber][3] + "</div>"
    );
    $( "#quote1" ).html(
        quotelist[questionnumber][1] + "<div class='attribution'>" + quotelist[questionnumber][4] + "</div>"
    );

    // Once the animation complete, remove the 'fadeIn' class
    $('#quote0').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('animated fadeIn')
    });
    $('#quote1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('animated fadeIn')
    });
}

function video() {
    $("#video-content").show();
    $("#landing").hide();
}

function audio(mode, note) {
    audioPlayer(audioConstants, mode, note).play();
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

var advanceScore = function() {

    var mode = "";
    if (quotelist[questionnumber][2] === 0){
        mode = "major";
        scorepositive++;
    } else {
        mode = "minor";
        scorenegative++;
    }

    return function () {
        questionnumber++;
        audio(mode, questionnumber);
        console.log(questionnumber);
        console.log(". " + "score negative: " + scorenegative + " score positive: " + scorepositive);

    }
}


$( "#quote0" ).click(function() {
  //add to the correct score based on which kind of quote this is.

    var positiveOrNegative = advanceScore();
    positiveOrNegative();

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
    var positiveOrNegative = advanceScore();
    positiveOrNegative();

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
