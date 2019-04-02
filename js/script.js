$(document).ready(function () {

    addVideosToHtml();

    collectAPIData();

});

function collectAPIData() {
    // document.getElementById("searchCityButton").addEventListener("click", function() {
    var type = "annualavg";
    var vari = "tas";
    var start = "1920";
    var end = "1939";
    var country = "BRA";
    var url = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/" +
        type + "/" + vari + "/" + start + "/" + end + "/" + country;
    console.log(url);
    collectData(url, showData);
    //})
}

function addVideosToHtml() {
    var videoOne = document.getElementById("videoOne");
    var videoTwo = document.getElementById("videoTwo");
    var videoThree = document.getElementById("videoThree");

    videoOne.src = 'https://h5.veer.tv/player?vid=160766&utm_medium=embed';
    videoOne.autoplay = true;
    videoOne.muted = true;

    videoTwo.src = 'https://assets.veervr.tv/@veervr/blink/v0.8.6/embed/index.html?ixId=MtbjxDMRdIoavhue9xLHNJtmZCY&lang=en&utm_medium=embed';
    videoThree.src = 'https://h5.veer.tv/player?vid=178636&utm_medium=embed';
}

function collectData(url, callback_Function) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback_Function(this);
        }
    };
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
