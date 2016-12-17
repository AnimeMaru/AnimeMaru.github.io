var RIGHT = 39;
var LEFT = 37;
$(document).keydown(function(e) {
    if (e.keyCode == RIGHT) {
        flipTotoro(-1);
        moveHorizontal("#totoro", 20);
        if (!$('#totoro').visible()) {
            console.log("reset to 0 ");
            $("#totoro").css({ left: 0 });
        }
    } else if (e.keyCode == LEFT) {
        flipTotoro();
        moveHorizontal("#totoro", -20);
        if (!$('#totoro').visible()) {
            console.log("reset to 0 ");
            var x = $(window).width() - 500;
            $("#totoro").css({ left: x });

        }
    }
});


function moveHorizontal(divElement, x_diff) {
    var pos = $(divElement).offset();
    console.log("totoro position x: "+pos.left);
    var new_x = pos.left + x_diff;
    $(divElement).offset({left: new_x});
    console.log("Actual new x left: "+$(divElement).position().left);
    //var perc = getXPercentage(pos);
    //console.log("percent: " + perc);

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


function changeScene(imagePath) {
    $("body").css({
        "background-image": "url(" + imagePath + ")",
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        "background-size": "cover",
        "background-repeat": "no-repeat"
    });

}

function firstPage(perc) { //fall
    if (perc < 0.02) {
        $('#text').append("<h1 class='tlt'>Welcome to Totoro's Adventure</h1>");
        $('.tlt').textillate();
    }
}

function secondPage(perc) { //winter
    $("#text").empty();
}

function snow() {
    snowStorm.resume();
    //snowStorm.followMouse = true;

}

function spring() {
    snowStorm.freeze();
}
