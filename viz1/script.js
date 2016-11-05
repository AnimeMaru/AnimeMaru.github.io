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
                type: 'category' // this needed to load string x value
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
    ["Value", 50, 50]
]

var firstRound = [
    ['x', "Life Potential", "Otaku Potential", "NEET potential"],
    ["Value", 25, 60, 15]
]

var scndRound = [
    ['x', "Life Potential", "Otaku Potential", "NEET potential", "Waifu/Husbando development"],
    ["Value", 10, 65, 40, 6]
]

//third round of chart
var postKnk = [
    ['x', "Life Potential", "Otaku", "NEET potential", "Waifu/Husbando development", "Employment"],
    ["Value", -20, 100, 1, 18, 50]
]

var fourthRound = [
    ['x', "Life Potential", "Otaku", "NEET potential", "Unrequited Love", "Employment"],
    ["Value", -20, 100, 1, 90, 50]
]

var timeDiff = 1000;

var chart = createGraph("graph", initialData);

animateRound(firstRound, timeDiff);
animateRound(scndRound, 2 * timeDiff);
addDeleteImage(3 * timeDiff, "knk.png");
animateRound(postKnk, 4 * timeDiff, function() {
    $("#graph").show();
    $("#img").empty();
});
animateRound(fourthRound, 5 * timeDiff, function() {
    heartBreak(200);
});

function animateRound(newData, delay, callback = null) {
    setTimeout(function() {
        if (callback) {
            console.log("execute callback");
            callback();
        }
        chart.load({
            columns: newData
        });
    }, delay);
}

function heartBreak(delay) {
    $("#img").append('<div class="heart-Circle" style="margin:0 auto"><div class="heart-Container">' +

        '<div class="left-Side sides">' +

        '<div class="half">' +
        '<div class="heart"></div>' +
        '</div> <!-- end .half -->' +

        '<div class="points">' +
        '<div class="point pt1"></div>' +
        '<div class="point pt4"></div>' +
        '<div class="point pt2"></div>' +
        '<div class="point pt3"></div>' +
        '</div> <!-- end .points -->' +

        '</div> <!-- end .left-Side -->' +

        '<div class="right-Side sides">' +

        '<div class="half">' +
        '<div class="heart"></div>' +
        '</div> <!-- end .half -->' +

        '<div class="points">' +
        '<div class="point pt1"></div>' +
        '<div class="point pt2"></div>' +
        '<div class="point pt3"></div>' +
        '</div> <!-- end .points -->' +

        '</div> <!-- end .right-Side --></div>');
    setTimeout(function() {
        $('.heart-Container').toggleClass('broken');
    }, delay);

}

function addDeleteImage(delay, imageFile) {
    setTimeout(function() {
        $("#graph").hide();
        $("#img").append("<img src='" + imageFile + "'>");
        $("#img").addClass('animated headShake');
    }, delay);

}
