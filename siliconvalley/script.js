/**
 * Once in a while, we here at Anime Maru believe in anime. 
 * More than once in a while, we here at Anime Maru believe in javascript, a language that 
 * clearly identifies with the weeb interpretation of Japanese in its beautiful
 * incomprehensibility, efficiency, and logicality only to be understood by those who
 * have transcended their human base needs.
 */


function years(num) {
    var years = [];
    for (var i = 0; i < num; i++) {
        if (i.toString().length > 1) {
            years.push("20" + i);
        } else {
            years.push("200" + i);
        }
    }
    console.log(years);
    return years;
}

var twitter = ['Twitter', 30, 200, 100, 400, 150, 250, 50, 100, 250, 100, 11, 12, 13, 100, 16];
var facebook = ['Facebook', 30, 200, 100, 400, 150, 250, 50, 100, 250, 100, 11, 12, 13, 100, 16]


function createGraph(divElementID) {
    var chart = c3.generate({
        bindto: "#" + divElementID,
        data: {
            columns: [
                twitter,
                facebook
            ]
        },
        axis: {
            x: {
                type: 'category',
                categories: years(16)
            },
            y: {
                label: {
                    text: 'Percent of otaku',
                    position: 'outer-middle',
                }
            }
        },
        tooltip: {
            format: {
                name: function(name, ratio, id, index) {
                    console.log(name+","+ratio+","+id+","+index);

                    return name;
                }
            }
        },
        legend: {
            hide: true
        },
        grid: {

        },
    });

    return chart;
}

function yearConditions(name, index){
    if (name=="Facebook"){
        if (index==2){ //October 28, 2002 launched facebook
            return "Zuckerberg had enough of stupid 2002 anime and out of boredome, launches Facebook on October 28, 2002"
        }
    }
}

createGraph("graph");
