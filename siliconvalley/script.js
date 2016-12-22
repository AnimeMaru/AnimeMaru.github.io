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



var twitter = ['Twitter', 0, 0, 0, 0, 0, 0, 50, 52, 52, 55, 56, 60, 67,77, 80,80,90];
var facebook = ['Facebook', 0, 0 /*2001*/, 70/*2002*/, 90/*2003*/, 85/*2004*/, 80/*2005*/, 81/*2006*/, 82/*2007*/, 83/*2008*/, 84/*2009*/, 85/*2010*/, 85, 85, 86, 85,86,85]
var crunchyroll = ["Crunchyroll",0,0,0,0,0,0,100,100,100,100,100,100,100,100,100,100,100]

function createGraph(divElementID) {
    var chart = c3.generate({
        bindto: "#" + divElementID,
        data: {
            columns: [
                twitter,
                facebook,
                crunchyroll
            ],
            type:"bar"
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
        else if (index==4){
            return "Zuckerberg launches the real Facebook, still unaware he was contributing to the unequal distribution of otaku to non otaku in the tech industry"
        }else if (index==8){
            return "Facebook sets up its international headquarters in Dublin, Ireland, unaware they would be hiring a cult of Celty Sturluson worshippers";
        }else if (index==10){
            return "Facebook introduces engineering puzzles to give users an opportunity to be hired by Facebook. Puzzles appear to favor those who aware of the most efficient algorithm to sort through all Naruto episodes by density of flashbacks."
        }else if (index==14){
            return "Facebook announces aquisition of Oculus VR, and with that, hires a team of devoted SAO fans, causing a deep rift between the new team and older, elitist employees"
        }else {
            return name;
        }
    }
    else if (name=="Twitter"){
        if (index==6){
            return "Twitter was founded. Epitomizes freedom of expression for native and nonnative otaku alike."
        }
        else if (index==12){
            return "Twitter expands its office in Dublin, unaware they would be hiring a cult of Celty Sturluson worshippers"
        }
        else if (index==13){
            return "The current record as of Aug 3, 2013 was set in Japan, with 143,199 tweets per second during a television screening of Castle in the Sky, by no means a result of otaku engineers skewing tweets to favor Miyazaki's films."
        }
        else if (index==16){
            return "Twitter becomes the largest source of breaking news concerning Olympic figure skater tweets touting Yuri on Ice"

        }
        else return name;
    }else if (name=="Crunchyroll"){
        if (index==8){
            return "Crunchyroll transititions from illegal to legal streaming, appealing to morally conscious otaku"
        }else if (index==9){
            return "Crunchyroll announces deal with TV Tokyo to host episodes of Naruto Shippuden. Decides not to count engineers who only watch Naruto 'otaku'"
        }
        else if (index==15){
            return "ANN announces Crunchyroll has 700,000 paying subscribers. Otaku engineers trek on without the same free food benefits as google despite fighting for an equally noble and self important mission."
        }else{
            return name;
        }
    }

}

createGraph("graph");
