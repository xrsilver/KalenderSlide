$(function(){

    var year=moment().format('YYYY')
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
        moment.locale('sv');
        if(data.length<1){
            alert("No data available!")
        }
        else{
            var today = moment().format('YYYY-MM-DD');   //  Change date here 
        console.log(today);
        for(var x=0; x<data.dagar.length;x++){
            if(today==data.dagar[x].datum){
                var redDay = data.dagar[x]["röd dag"];
                
                $("#slideshow #slidewindow .idag #year").html(moment().format('YYYY'));
                $("#slideshow #slidewindow .idag #v").html("v. "+data.dagar[x].vecka);
                $("#slideshow #slidewindow .idag #vday").html((moment().format('dddd').charAt(0).toUpperCase())+ (moment().format('dddd').slice(1)));
                if(redDay=="Ja"){$("#slideshow #slidewindow .idag #day").html(moment().format('D')).css("color","red");}
                $("#slideshow #slidewindow .idag #day").html(moment().format('D'));
                $("#slideshow #slidewindow .idag #month").html((moment().format('MMMM').charAt(0).toUpperCase())+ (moment().format('MMMM').slice(1)));
                if(data.dagar[x].namnsdag[1]==undefined && data.dagar[x].namnsdag[2]==undefined){
                    $("#slideshow #slidewindow .idag #namn").html(data.dagar[x].namnsdag[0]);
                }
                else if(data.dagar[x].namnsdag[2]==undefined){
                    $("#slideshow #slidewindow .idag #namn").html(data.dagar[x].namnsdag[0]+" & "+data.dagar[x].namnsdag[1]);
                }
                else {$("#slideshow #slidewindow .idag #namn").html(data.dagar[x].namnsdag[0]+", "+data.dagar[x].namnsdag[1]+"<br> & "+data.dagar[x].namnsdag[2]);}
                
                if(data.dagar[x].flaggdag.length>1){
                $("#slideshow #slidewindow .idag #flag").html("<img src='../Images/flag_sweden.png' alt='flag sweden'> "+data.dagar[x].flaggdag);}
                

             }   
            }
        }
}
    function f() {
        alert("Something went wrong!")
    }
})
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
window.onload = function() {
    "use strict";
    //autoplay true=on, false=off
    var autoplay = false;
  
    //slideshow autoplay timing in ms
    var autoTime = 3000;
  
    //vars
    var tracker = 0,
      slidewindow = document.querySelector("#slideshow #slidewindow"),
      slides = document.querySelectorAll("#slideshow #slidewindow div"),
      next = document.querySelector("#slideshow #controls #next"),
      prev = document.querySelector("#slideshow #controls #prev"),
      dots = document.querySelector("#slideshow #controls #dots"),
      allDots = dots.getElementsByTagName("LI");
  
    //Attach click events to next and prev
    next.onclick = direction;
    prev.onclick = direction;
  
    //create a dot for each slide
    for (var i = 0; i < slides.length; i++) {
      var dot = document.createElement("LI");
      dot.id = i;
      dots.appendChild(dot);
      dot.onclick = direction;
    }
  
    //run function on resize
    window.onresize = updateAll;
  
    //invoke updateAll
    updateAll();
  
    //update slide and container sizes
    function updateAll() {
      updateDots(tracker);
  
      //set width of slidewindow to 100%
      slidewindow.style.width = "100%";
  
      //Get current width and height
      var curWidth = slides[0].offsetWidth;
      var curHeight = slides[0].offsetHeight;
  
      //set current w/h of slidewindow to match slide
      slidewindow.style.width = curWidth + "px";
      slidewindow.style.height = curHeight + "px";
  
      //set position of each slide
      for (var i = 0; i < slides.length; i++) {
       // console.log(slides[i].style.transform)
        slides[i].style.transform = "translateX(" + (i * curWidth + tracker * curWidth) + "px )";
      }
    }
  
    function isNumber(obj) {
      return !isNaN(parseFloat(obj));
    }
  
    //autoplay
    if (autoplay === true) {
      setInterval(function() {
        if (tracker > 1 - slides.length) {
          tracker -= 1;
        } else if (tracker === 1 - slides.length) {
          tracker = 0;
        } else if (tracker < 0) {
          tracker += 1;
        } else if (tracker === 0) {
          tracker = -slides.length + 1;
        }
        updateAll();
      }, autoTime);
    }
  
    function direction(eventObject) {
      //get id from target
      var idVal = eventObject.target.id;
  
      if (idVal === "next" && tracker > 1 - slides.length) {
        tracker -= 1;
      } else if (idVal === "next" && tracker === 1 - slides.length) {
        tracker = 0;
      } else if (idVal === "prev" && tracker < 0) {
        tracker += 1;
      } else if (idVal === "prev" && tracker === 0) {
        tracker = -slides.length + 1;
      } else if (isNumber(idVal)) {
        tracker = -idVal;
      }
      updateAll();
    }
  
    //updateDots
    function updateDots(n) {
      n *= -1;
      for (var i = 0; i < allDots.length; i++) {
        allDots[i].className = "";
      }
      allDots[n].className = "active";
    }
  
    //swipe event listeners
    slidewindow.addEventListener("touchstart", handleTouchStart, false);
    slidewindow.addEventListener("touchmove", handleTouchMove, false);
  
    //swipe vars
    var xDown = null;
    var yDown = null;
  
    //swipe handleTouchStart
    function handleTouchStart(evt) {
      xDown = evt.touches[0].clientX;
      yDown = evt.touches[0].clientY;
    }
  
    //swipe handleTouchMove
    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }
  
      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;
  
      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
  
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*determine most significant*/
        if (xDiff > 0) {
          //swipe left - next
          if (tracker > 1 - slides.length) {
            tracker -= 1;
          } else if (tracker === 1 - slides.length) {
            tracker = 0;
          }
          updateAll();
        } else {
          //swipe right - prev
          if (tracker < 0) {
            tracker += 1;
          } else if (tracker === 0) {
            tracker = -slides.length + 1;
          }
          updateAll();
        }
      } else {
        if (yDiff > 0) {
          //swipe up
        } else {
          //swipe down
        }
      }
  
      /* reset values */
      xDown = null;
      yDown = null;
    }
  };
  