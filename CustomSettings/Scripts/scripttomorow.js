$(function(){
    var y=moment().format('YYYY')
    var today = moment().format('MM-DD'); //"12-31"
                                                                                                console.log(today);
    
    var year=0;
    if (today=="12-31") {
       year=eval(y)+eval(1);   
       
       
    }
    else{year=y;}
                                                                                                 console.log( "the year is: "+year);
    var adress="https://api.dryg.net/dagar/v2.1/"+year+"?callback"

    $.ajax({
        async:true,
        url:adress,
        type:"GET",
        dataType:"json",
    })
    .done(d)
    .fail(f)
    function d(data){
                                                                                                console.log("URL is: "+adress);
        
        moment.locale('sv');
        if(data.length<1){
            alert("No data available!")
        }
        else{
            today = moment().format('YYYY-MM-DD');   //  Change date here 
                                                                                                    console.log("today "+today);
        for(var x in data.dagar){
                
            var z=eval(x)+eval(1);                                                  
            if(today==data.dagar[x].datum){
                
                
                                                                                   
                                                                                                        console.log(x);
                                                                                                        console.log(z);
                
                var redDay = data.dagar[z]["röd dag"];
                
                $("#slideshow #slidewindow .imorgon #year").html(year);
                $("#slideshow #slidewindow .imorgon #v").html("v. "+data.dagar[z].vecka);
                $("#slideshow #slidewindow .imorgon #vday").html(data.dagar[z].veckodag);
                if(redDay=="Ja"){$("#slideshow #slidewindow .imorgon #day").html(moment(data.dagar[z].datum).format('D')).css("color","red");}
                $("#slideshow #slidewindow .imorgon #day").html(moment(data.dagar[z].datum).format('D'));
                $("#slideshow #slidewindow .imorgon #month").html((moment(data.dagar[z].datum).format('MMMM').charAt(0).toUpperCase())+ (moment(data.dagar[z].datum).format('MMMM').slice(1)));
                
                if(data.dagar[z].namnsdag[1]==undefined && data.dagar[z].namnsdag[2]==undefined){
                    $("#slideshow #slidewindow .imorgon #namn").html(data.dagar[z].namnsdag[0]);
                }
                else if(data.dagar[z].namnsdag[2]==undefined){
                    $("#slideshow #slidewindow .imorgon #namn").html(data.dagar[z].namnsdag[0]+" & "+data.dagar[z].namnsdag[1]);
                }
                else {$("#slideshow #slidewindow .imorgon #namn").html(data.dagar[z].namnsdag[0]+", "+data.dagar[z].namnsdag[1]+"<br> & "+data.dagar[z].namnsdag[2]);}
                
                if(data.dagar[z].flaggdag.length>1){
                $("#slideshow #slidewindow .imorgon #flag").html("<img src='../Images/flag_sweden.png' alt='flag sweden'> "+data.dagar[z].flaggdag);}

                }
                
                
            else {
                
            }

             }
        }
    }
    function f() {
        alert("Something went wrong!")
    }
})

