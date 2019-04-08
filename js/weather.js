// This is a HttpRequest to the openweather.org API where we get the content
function collectData(url, callback_Function){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            callback_Function(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    
} /* END of collectData - function */

function showData(jsonData){
     var jsonElements= JSON.parse(jsonData.responseText);
    document.getElementById("showWeather").innerHTML =
        "<h2>Location: "+jsonElements.name+", "+jsonElements.sys.country+"</h2>"+    
        "<table><tr><b>Temperature:</b> "+jsonElements.main.temp+" &#8451; </tr> &nbsp; &nbsp; &nbsp;"+
        "<tr><b>Pressure:</b> "+jsonElements.main.pressure+" hPa</tr></table>"+
        "<table><tr><b>Humidity:</b> "+jsonElements.main.humidity + " &#37; </tr> &nbsp; &nbsp; &nbsp;"+
        "<tr><b>Wind:</b> "+jsonElements.wind.speed+" m/s</tr></table>";
}


/* Main program */
    var url = "https://api.openweathermap.org/data/2.5/weather?q=brasilia&units=metric&appid=5f2e27f6971e8f85f633b0cd12187ca2";
    collectData(url, showData);
    