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
    ["Value", 10, 65, 20, 6]
]

var postKnk = [
    ['x', "Life Potential", "Otaku", "NEET potential", "Waifu/Husbando development", "Employment"],
    ["Value", -10, 100, 1, 18, 50]
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

function addDeleteImage(delay, imageFile) {
    setTimeout(function() {
        $("#graph").hide();
        $("#img").append("<img src='" + imageFile + "'>");
        $("#img").addClass('animated headShake');
    }, delay);

}
