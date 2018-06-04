$(document).ready(function () {
    $('#guska').click(function () {
        alert('Guska je ptica srednje velicine iz porodice plovke.');
    });
    var guskaAudio = document.getElementById("guskaZvuk");
    $('#guska').mouseover(function () {
        guskaAudio.play();
    });

    $('#krava').click(function () {
        alert('Krava je domace govedo.');
    });
    var kravaAudio = document.getElementById("kravaZvuk");
    $('#krava').mouseover(function () {
        kravaAudio.play();
    });

    $('#macka').click(function () {
        alert('Macka je mali mesozder.');
    });
    var mackaAudio = document.getElementById("mackaZvuk");
    $("#macka").mouseover(function () {
        mackaAudio.play();
    });

    $('#pas').click(function () {
        alert('Pas je pripitomljeni sisar iz porodice Canidae.');
    });
    var pasAudio = document.getElementById("pasZvuk");
    $('#pas').mouseover(function () {
        pasAudio.play();
    });

    $('#petao').click(function () {
        alert('Petao je vrsta ptice, muzjak kokoske.');
    });
    var petaoAudio = document.getElementById("petaoZvuk");
    $('#petao').mouseover(function () {
        petaoAudio.play();
    });



});