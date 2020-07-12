var times=3;
var link='https://www.youtube.com'

function sfun(opt)
{
    switch (opt) 
    {
        case 0: return hiddde();
        case 1: return "https://www.google.com";
        case 2: return "https://www.google.com";
        case 3: return "https://www.github.com";
        default: return "https://www.hackerrank.com";
    }    
}

for(var i=1; i<times;i++)
{   
    document.write('<div id="ad" class="after1"')
    document.write('<h3 id="tim" ><br></h3>')
    document.write("<button onclick="+sfun(i)+" class="+"button"+">COMING SOON<br></a>")
    document.write("</div>")
}

function hiddde()
{
    var x = document.getElementById('head');
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function startTime()
{   var b = document.getElementById('bg');
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);

    if (14<h<22){
        b.style.background = "#f3f3f3 url('../media/evening.jpg') no-repeat right top";
        document.getElementById('bg').style.backgroundSize="200px 200px";
    }
    else if(6<h<14){
        b.style.background = "#f3f3f3 url('../media/morn.jpg') no-repeat right top";
        document.getElementById('bg').style.backgroundSize="200px 200px";
    }
    else if(22<h<6){
        b.style.background = "#f3f3f3 url('../media/night.jpg') no-repeat right top";
        document.getElementById('bg').style.backgroundSize="200px 200px";
    }
    function checkTime(i) 
{
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


}

function oprat(){
    var a=Number(document.getElementById("fir").value);
    var b=Number(document.getElementById("sec").value);
    var q;
    q=a+b;
    document.getElementById("ans").innerHTML=q;
}

function pla(){ 
    document.getElementById("audi").play();
}
function stp(){
    document.getElementById("audi").pause();
}

function vpla(){ 
    document.getElementById("vid").play();
}
function vpos(){
    document.getElementById("vid").pause();
}


var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function anim() {
    var elem = document.getElementById("ani");   
    var elem2 = document.getElementById("ani2");   

    var pos = 0;
    var pos2= 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 180 && pos2==180) {
        clearInterval(id);
      } else {
        pos++; 
        pos2++;
        elem.style.top = pos + "px"; 
        elem.style.right = pos + "px";
        elem2.style.top = pos2 + "px"; 
        elem2.style.left = pos2 + "px";  
    }
    }
}

function zoomin()
{   
    var wid=30;
    var diff=169;
    if (wid<200)
    {
        wid=wid+diff;
        document.getElementById("zom").style.width=wid;
    }
    else{
        clearInterval(intID);
    }
}
function zoomout()
{
    var wid=199;
    var diff=169;
    if (wid>30)
    {
        wid=wid-diff;
        document.getElementById("zom").style.width=wid;
    }
    else{
        clearInterval(intID);
    }
}