function getQueryStringParameter(urlParameterKey) {
        var params = document.URL.split('?')[1].split('&');
        var strParams = '';
        for (var i = 0; i < params.length; i = i + 1) {
            var singleParam = params[i].split('=');
            if (singleParam[0] == urlParameterKey)
                return decodeURIComponent(singleParam[1]);
        }
    }


$(function () { 
    

    var location = getQueryStringParameter('Location');
    location = location.replace("ö", "oe");
    location = location.replace("ö", "oe");
    location = location.replace("ä", "ae");
    location = location.replace("å", "aa");
    console.log(location);

var adrs = 'https://api.openweathermap.org/data/2.5/find?q=' + location + '&id=524901&APPID=2973f4624e336c7c72aad7b172b35351&units=metric';

$("#wcity").html(location);

$.ajax({
    async:true,
    url: adrs,
    type:"GET",
    dataType:"json",
})

.done(d)
.fail(f)
function d(data){
    if(data.length<1){
        alert("No data available!")
    }else

    var icon = data.list[0].weather[0].icon;

    console.log(data.list[0].main.temp_max);
    


    switch (icon) { //
        
        case "01d":
            $(".icon").html("<img src='../svg/day.svg' alt='Clear Day'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;
            
        case "01n":
            $(".icon").html("<img src='../svg/night.svg' alt='Clear Night'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;
            
        case "02d":
            $(".icon").html("<img src='../svg/cloudy-day-1.svg' alt='Few Clouds'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;
            
        case "02n":
            $(".icon").html("<img src='../svg/cloudy-night-1.svg' alt='Few Clouds'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;

        case "03d":
            $(".icon").html("<img src='../svg/cloudy.svg' alt='Scattered Clouds'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
         break;

        case "03n":
            $(".icon").html("<img src='../svg/cloudy.svg' alt='Scattered Clouds'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;

        case "04d":
            $(".icon").html("<img src='../svg/cloudy.svg' alt='Broken Clouds'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;

        case "04n":
            $(".icon").html("<img src='../svg/cloudy.svg' alt='Broken Clouds'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;

        case "09d":
            $(".icon").html("<img src='../svg/rainy-6.svg' alt='Shower Rain'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;

        case "09n":
            $(".icon").html("<img src='../svg/rainy-6.svg' alt='Shower Rain'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;
            
        case "10d":
            $(".icon").html("<img src='../svg/rainy-3.svg' alt='Rain'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;
            
        case "10n":
            $(".icon").html("<img src='../svg/rainy-6.svg' alt='Rain'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;
            
        case "11d":
            $(".icon").html("<img src='../svg/thunder.svg' alt='Thunderstorm'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;

        case "11n":
            $(".icon").html("<img src='../svg/thunder.svg' alt='Thunderstorm'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
         break;

        case "13d":
            $(".icon").html("<img src='../svg/snowy-1.svg' alt='Snow'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;

        case "13n":
            $(".icon").html("<img src='../svg/snowy-6.svg' alt='Snow'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;

        case "50d":
            $(".icon").html("<img src='../Images/dimma.png' alt='Mist'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;

        case "50n":
            $(".icon").html("<img src='../Images/dimma.png' alt='Mist'>")
            $(".iconcontainer .icon img").css({ "width":"300px", });
            $(".weather #grader .vederet").html("Max: "+data.list[0].main.temp_max+" Min: "+data.list[0].main.temp_min);
        break;
        
            default:
            break;
    }
     
    

    }

function f() {
    alert("Something went wrong!")
}



})