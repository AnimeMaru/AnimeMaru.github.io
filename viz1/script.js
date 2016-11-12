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
                type: 'category', // this needed to load string x Percent
                /*label: {
                    text: "Potentials/Probability of stuff happening in life",
                    position: "outer-center"
                }*/
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
    ['x', "Otaku", "Forever Alone", "Patreon = only source of income", "Anime Elitist/Ego Levels", "Probability of death"],
    ["Percent", 100, 100, 3, 100, 10]
]

var round7 = [
    ['x', "Otaku", "Forever Alone", "Patreon = only source of income", "Anime Elitist/Ego Levels", "Probability of death"],
    ["Percent", 100, 100, 1, 100, 20]
]

var round8 = [
    ['x', "Otaku", "Forever Alone", "Patreon = only source of income", "Anime Elitist/Ego Levels", "Probability of death"],
    ["Percent", 100, 100, 0, 100, 50]
]

var round9 = [
    ['x', "Existential Crisis"],
    ["Percent", 500]
]



var timeDiff = 1500;

//callback hell
var chart = createGraph("graph", initialData);

playEverything();

function playEverything() {
    $("#xlabel").show();
    animateRound(firstRound, timeDiff, function() {
        animateRound(scndRound, timeDiff, function() {
            addDeleteImage(timeDiff, "Images/knk.png", function() {
                animateRound(postKnk, timeDiff, function() {
                    $("#graph").show();
                    $("#img").empty();
                    animateRound(fourthRound, timeDiff, function() {
                        heartBreak(200);
                        //patreon
                        animateRound(fifthRound, timeDiff, function() {
                            $("#img").empty();
                            displayPatreon(function() {
                                animateRound(round6, timeDiff, function() {
                                    $(".flip-container").empty();
                                    animateRound(round7, timeDiff, function() {
                                        animateRound(round8, timeDiff, function() {
                                            animateRound(round9, timeDiff, function() {
                                                final(function() {
                                                    $("#graph").empty();
                                                    chart = createGraph("graph", initialData);
                                                    playEverything();
                                                });
                                            }, true);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });

            });
        });
    });
}


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
        //$("#graph").hide();
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
    setTimeout(function() {
        $(".flip-container").addClass('hover');
        if (callback) {
            callback();
        }
    }, timeDiff);
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
