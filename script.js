/**
 * Created by sstienface on 03/12/2018.
 */


const holes = $(".hole");
const scoreBoard = $(".score");
const moles = $(".mole");
var bouton = $("#startGame");
var restart=$('#restart');
var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 10;
let lasthole;
let timee = false;
//function start game


restart.click(function () {
    countdown=10;


    $('#startGame').attr("disabled",false);

    $('.hole').removeClass('up');
    i=0;
    $('.score').text(i);

});

countdownNumberEl.textContent = countdown;

function timerand(min, max) {

    return Math.round(Math.random() * (max - min) + min);

}
//function taupe random
function random(holes) {

    const rand = Math.floor(Math.random() * holes.length);

    const hole = holes[rand];


    if (hole === lasthole) {
        random(holes)
    }
    lasthole = hole;

    return hole;
}
bouton.click(function () {
  const hole=  random(holes);

    var compteurObj = setInterval(function () {

        countdown = --countdown;

        countdownNumberEl.textContent = countdown;


        if (countdown == 0) {
            $('#restart').attr('disabled',false);


            clearInterval(compteurObj);
        }
    }, 1000);

    $('#restart').attr('disabled',true);
    if ($(this).click=1){
        this.disabled=true;


    }
    apparais();
});
//fonction qui fait apparaitre les taupes
function apparais() {

    const time = timerand(200, 1000);

    console.log(time);

    const hole = random(holes);

    hole.classList.add('up');
if(countdown>0) {
    setTimeout(() => {

        hole.classList.remove('up');

        if (!timee) apparais();
    }, time);
}
else{
    alert("Game Over");
hole.classList.remove('up');
}
}

//function taper sur la taupe
var taper = $('.hole');

var i = 0;
taper.click(function () {

    console.log(taper);

    if ($(this).hasClass('up')) {

        $(this).removeClass('up');

        $('.score').text(i++);

    }


    console.log(i);
});


function disparais() {

}


/*for(var i=0;i<moles.length;i++) {
    image.id="dede"+i;

}



image.src="taupe.jpg";
moles.append(image);
holes.append(moles);
*/








