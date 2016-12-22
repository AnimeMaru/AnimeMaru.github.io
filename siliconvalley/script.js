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



var twitter = ['Twitter', 0, 0, 0, 0, 0, 0, 50, 100, 250, 100, 11, 12, 13, 100, 16,40,50];
var facebook = ['Facebook', 0, 0, 100, 90, 85, 80, 81, 82, 83, 84, 85, 85, 85, 86, 85,86,85]


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
                categories: years(17)
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
                    return yearConditions(name, index);
                    /*
                    console.log(name+","+ratio+","+id+","+index);

                    return name;
                    */
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
            return "Zuckerberg, unaware of the unequal demographic distribution he would contribute to exposing in the \n tech industry, launches Facemash (Facebook's predecessor) on October 28, 2002"
        }
        else if (index==0|| index==1|| index==3||index==5 || index==6||index==7 || index==9||index==11||index==12||index==13||index==15 ||index==16){
            return name;
        }
        else if (index==4){
            return "Zuckerberg launches the real Facebook, still unaware he was contributing to the unequal distribution of otaku to non otaku in the tech industry"
        }else if (index==8){
            return "Facebook sets up its international headquarters in Dublin, Ireland, unaware they would be hiring a cult of Celty Sturluson worshippers";
        }else if (index==10){
            return "Facebook introduces engineering puzzles to give users an opportunity to be hired by Facebook. Puzzles appear to favor those who aware of the most efficient algorithm to sort through all Naruto episodes by density of flashbacks."
        }else if (index==14){
            return "Facebook announces aquisition of Oculus VR, and with that, hires a team of devoted SAO fans, causing a deep rift between the new team and older, elitist employees"
        }
    }
    else if (name=="Twitter"){
        if (index==0|| index==1|| index==2||index==3||index==4||index==5){
            return name;
        }
        else if (index==6){
            return "Twitter was founded. Epitomizes freedom of expression for native and nonnative otaku alike."
        }
        else if (index==16){
            return "Twitter becomes the largest source of breaking news concerning Olympic figure skater tweets touting Yuri on Ice"

        }
        return name;
    }

}

createGraph("graph");
