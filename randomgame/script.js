var RIGHT = 39;
var LEFT = 37;
var UP = 38;
var DOWN = 40;
$(document).keydown(function(e) {
    if (e.keyCode == RIGHT) {
        flipTotoro(-1);
        moveHorizontal("#totoro", 20);
        if (!$('#totoro').visible()) {
            $("#totoro").css({ left: 0 });
        }
    } else if (e.keyCode == LEFT) {
        flipTotoro();
        moveHorizontal("#totoro", -20);
        if (!$('#totoro').visible()) {
            var x = $(window).width() - 500;
            $("#totoro").css({ left: x });

        }
    } else if (e.keyCode == UP) {
        moveVertical("#totoro", -5);
        if (!$('#totoro').visible()) {
            var y = $(window).height() - 100;
            $("#totoro").css({ top: y });
        }

    } else if (e.keyCode == DOWN) {
        moveVertical("#totoro", 5);
        if (!$('#totoro').visible()) {
            var y = $(window).height() - 100;
            $("#totoro").css({ top: y });
        }

    }
});


function moveHorizontal(divElement, x_diff) {
    var pos = $(divElement).offset();
    console.log("totoro position x: " + pos.left);
    var new_x = pos.left + x_diff;
    $(divElement).offset({ left: new_x });
    console.log("Actual new x left: " + $(divElement).position().left);
}

function moveVertical(divElement, y_diff) {
    var pos = $(divElement).offset();
    console.log("totoro position y: " + pos.top);
    var new_y = pos.top + y_diff;
    $(divElement).offset({ top: new_y });
}

function getXPercentage(pos) {
    var percent = pos.left / ($(window).width() - 500);
    return percent;
}

function flipTotoro(isLeft = 1) {
    var direction = isLeft.toString();
    $("#totoro").css({
        "-moz-transform": "scaleX(" + isLeft + ")",
        "-webkit-transform": "scaleX(" + isLeft + ")",
        "-o-transform": "scaleX(" + isLeft + ")",
        "transform": "scaleX(" + isLeft + ")"
    });
}
