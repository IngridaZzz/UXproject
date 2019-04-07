$(document).ready(function () {

    addVideosToHtml();

    //collectAPIData();

});

function addVideosToHtml() {
    var videoOne = document.getElementById("videoOne");
    var videoTwo = document.getElementById("videoTwo");
    //var videoThree = document.getElementById("videoThree");

    //videoOne.src = 'https://h5.veer.tv/player?vid=160766&utm_medium=embed';
    //videoOne.autoplay = true;
    //videoOne.muted = true;

    //videoTwo.src = 'https://assets.veervr.tv/@veervr/blink/v0.8.6/embed/index.html?ixId=MtbjxDMRdIoavhue9xLHNJtmZCY&lang=en&utm_medium=embed';
    //videoThree.src = 'https://h5.veer.tv/player?vid=178636&utm_medium=embed';
}

function collectData(url, callback_Function) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback_Function(this);
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

function showData(jsonData) {
    var jsonElements = JSON.parse(jsonData.responseText);
    console.log(jsonElements);
}

$(document).ready(function () {
    $('#question').hide();

    $(document).keydown(function (e) {
        if (e.keyCode == '32') {
            $('#question').show();
        }
    });
});

$(document).ready(function () {
    $('.container').show();

    $(document).keydown(function (e) {
        if (e.keyCode == '32') {
            $('.container').hide();
        }
    });
});