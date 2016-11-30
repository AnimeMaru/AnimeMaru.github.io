/**
 * Once in a while, we here at Anime Maru believe in anime. 
 * More than once in a while, we here at Anime Maru believe in javascript, a language that 
 * clearly identifies with the weeb interpretation of Japanese in its beautiful
 * incomprehensibility, efficiency, and logicality only to be understood by those who
 * have transcended their human base needs.
 */


function createGraph(divElementID, columns) {
    var chart = c3.generate({
        bindto: "#" + divElementID,
        data: {
            x: 'x',
            columns: columns,
            groups: [
                ["Life Potential", "Otaku Potential"]
            ],
            type: 'bar',
        },
        legend: {
            hide: true
        },
        grid: {
            y: {
                show: true
            }
        },
        axis: {
            x: {
                type: 'category', 

            },
            y: {
                show: false
            }
        }
    });

    return chart;
}

var initialData = [
    ['x', "Life Potential", "Otaku Potential"],
    ["Percent", 50, 50]
]

var firstRound = [
    ['x', "Life Potential", "Otaku Potential", "NEET Potential"],
    ["Percent", 25, 60, 15]
]

var scndRound = [
    ['x', "Life Potential", "Otaku Potential", "NEET Potential", "Chance of Waifu/Husbando development", "Probability of Employment"],
    ["Percent", 10, 65, 40, 16, 5]
]

//third round of chart
var postKnk = [
    ['x', "Life Potential", "Otaku", "NEET potential", "Chance of Waifu/Husbando development", "PROBABILITY OF EMPLOYMENT"],
    ["Percent", 5, 100, 1, 5, 80]
]

var fourthRound = [
    ['x', "Life Potential", "Otaku", "NEET potential", "UNREQUITED LOVE", "Probability of Employment"],
    ["Percent", 0, 100, 50, 100, 40]
]

var fifthRound = [
    ['x', "Otaku", "NEET potential", "Forever Alone", "PATREON = ONLY SOURCE OF INCOME"],
    ["Percent", 100, 0, 100, 5]
]

var round6 = [
    ['x', "Otaku", "Forever Alone", "Patreon = only source of income", "Anime Elitist Levels", "Probability of death"],
    ["Percent", 100, 100, 3, 100, 10]
]

var round7 = [
    ['x', "Otaku", "Forever Alone", "Patreon = only source of income", "Anime Elitist Levels", "Probability of death"],
    ["Percent", 100, 100, 1, 100, 20]
]

var round8 = [
    ['x', "Otaku", "Forever Alone", "Patreon = only source of income", "Anime Elitist Levels", "Probability of death"],
    ["Percent", 100, 100, 0, 100, 50]
]

var round9 = [
    ['x', "Existential Crisis"],
    ["Percent", 500]
]


var timeDiff = 1000;

//callback hell
var chart = createGraph("graph", initialData);


function animateFirstRound() {
    $('#img').empty();
    $("#sidecommentary").empty();
    $("#sidecommentary").attr("data-text", "");
    $('body').css('background-color', 'white');
    $("#xlabel").show();
    animateRound(firstRound, timeDiff);
}

function animateSecondRound() {
    $("#age").html("1-12");
    animateRound(scndRound, timeDiff);
}

function animateThirdRound() {
    $("#age").html("13-16");
    addDeleteImage(timeDiff, "Images/knk.png", function() {
        animateRound(postKnk, timeDiff);
    });
}

function animateFourthRound() {
    $("#img").empty();
    $("#age").html("21-30");
    animateRound(fourthRound, timeDiff, function() {
        heartBreak(200);
    });
}

function animateFifthRound() {
    $("#img").empty();
    $("#age").html("24-35");
    animateRound(fifthRound, timeDiff, function() {
        displayPatreon();
    });
}

function animateSixthRound() {
    $(".flip-container").empty();
    animateRound(round6, timeDiff);
}

function animateSeventhRound() {
    $("#age").html("24-35");
    animateRound(round7, timeDiff);
}

function animateEigthRound() {
    $("#age").html("24-35");
    animateRound(round8, timeDiff);
}

function animateNinthRound() {
    $("#age").html("1-40");
    animateRound(round9, timeDiff);
}

function animateFinal() {
    final(function() {
        $('#img').empty();
        $("#age").html("0");
        $("#sidecommentary").attr("data-text", "Return to Death");
        $('body').css('background-color', 'black');
        $("#graph").empty();
        chart = createGraph("graph", initialData);
    });
}

var eventHandlers = { 'animate1': function() { animateFirstRound(); }, 'animate2': function() { animateSecondRound(); }, 'animate3': function() { animateThirdRound(); }, 'animate4': function() { animateFourthRound() }, 'animate5': function() { animateFifthRound(); }, 'animate6': function() { animateSixthRound() }, 'animate7': function() { animateSeventhRound(); }, 'animate8': function() { animateEigthRound(); }, 'animate9': function() { animateNinthRound() }, 'animate10': function() { animateFinal() } };

var clickCount = 0;

$('#proceed').click(function() {
    if (clickCount == 10) {
        clickCount = 0;
    }
    clickCount++;
    console.log("click count: "+clickCount);
    eventHandlers['animate' + clickCount]();
})

function animateRound(newData, delay, callback = null, isEnd = false) {
    setTimeout(function() {
        chart.load({
            columns: newData
        });
        if (isEnd) {
            setTimeout(function() {
                callback();
            }, timeDiff / 2);
        } else if (callback) {
            console.log("execute callback");
            callback();
        }
    }, delay);
}

function heartBreak(delay) {
    $("#img").append('<div class="heart-Circle" style="margin:0 auto"><div class="heart-Container">' +

        '<div class="left-Side sides">' +

        '<div class="half">' +
        '<div class="heart"></div>' +
        '</div>' +

        '<div class="points">' +
        '<div class="point pt1"></div>' +
        '<div class="point pt4"></div>' +
        '<div class="point pt2"></div>' +
        '<div class="point pt3"></div>' +
        '</div> ' +

        '</div>' +

        '<div class="right-Side sides">' +

        '<div class="half">' +
        '<div class="heart"></div>' +
        '</div>' +

        '<div class="points">' +
        '<div class="point pt1"></div>' +
        '<div class="point pt2"></div>' +
        '<div class="point pt3"></div>' +
        '</div>' +

        '</div></div>');
    setTimeout(function() {
        $('.heart-Container').toggleClass('broken');
    }, delay);

}

function addDeleteImage(delay, imageFile, callback = null) {
    setTimeout(function() {
        $("#img").empty();
        $("#img").append("<img style='width: 90%;' src='" + imageFile + "'>");
        $("#img").addClass('animated headShake');
        if (callback) {
            setTimeout(function() {
                callback();
            }, timeDiff / 4);
        }
    }, delay);
}

var object = "Spice and Wolf : Holo 1/8 Scale PVC Figures";

var patreonText = ["<h1>$25,128/year</h1> ~30 " + object, "<h1>$35,580/year</h1> ~43 " + object, "<h1>$1,776/year</h1> ~2 " + object, "<h1>$55,728/year</h1> ~67 " + object, "<h1>$2,112/year</h1> ~2.5 " + object];

function displayPatreon(callback = null) {
    for (var i = 0; i < 5; i++) {
        console.log("in loop");
        $("#img").append("<div class='flip-container' ontouchstart='this.classList.toggle('hover');'>" +
            "<div class='flipper'>" +
            "<div class='front'>" +
            "<img class='patreon' id = 'patreon" + i + "' src='Images/patreon" + (i + 1) + ".png'></div>" +
            "<div class='back'>" + patreonText[i] + "</div>" +
            "</div></div>");

        $("#patreon" + i).css("x", $(document).width() / (5 - i));
    }
}

function final(callback = null) {
    $("#graph").empty();
    $("#xlabel").hide();

    $("#graph").append("<div id='final'>Living the good life</div>");

    $("#final").addClass("animated rubberBand");
    setTimeout(function() {
        if (callback) {
            callback();
        }
    }, timeDiff);
}
