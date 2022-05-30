function znaki()
{
    zn=document.getElementById("znaki");
    zn.innerHTML = "&#708";
}
function znaki2()
{
    zn=document.getElementById("znaki");
    zn.innerHTML = "&#709";
}
function linkbratki()
{
    window.location.href = "index.html#bratki";
}
    // const sleepSync = (ms) => {
    //     const end = new Date().getTime() + ms;
    //     while (new Date().getTime() < end) { /* do nothing */ }
    // }
let i=0;
let j=0;
let cena = 0;
const lightmode = "rgb(209, 205, 205)";
let czydark = false;
function dark_mode()
{
    let x=document.querySelectorAll("li.me");
    n=x.length;
    for(var i=0;i<n;i++)
    {
        x[i].style.backgroundColor = "gray";
    }
    nav=document.getElementsByTagName("nav");
    nav[0].style.backgroundColor = "rgb(92, 88, 88)";
    mee=document.querySelectorAll("li.mee");
    m=mee.length;
    for(var j=0;j<m;j++)
    {
        mee[j].style.backgroundColor = "rgb(114, 114 ,114)";
    }
    czydark= true;
    body = document.getElementsByClassName("jeden");
    body[0].style.backgroundColor = "black";
    font=document.getElementsByClassName("spa");
    fontm=font.length;
    for(var k=0; k<fontm;k++)
    {
        font[k].style.color = "white";
    }
    dark=document.getElementsByClassName("dark");
    dark[0].innerHTML ="🌞";
}
function light_mode()
{
    let x=document.querySelectorAll("li.me");
    n=x.length;
    for(var i=0;i<n;i++)
    {
        x[i].style.backgroundColor = "white";
    }
    nav=document.getElementsByTagName("nav");
    nav[0].style.backgroundColor = "rgb(236, 236, 236)";
    mee=document.querySelectorAll("li.mee");
    m=mee.length;
    for(var j=0;j<m;j++)
    {
        mee[j].style.backgroundColor = "rgb(221, 218, 218)";
    }
    czydark= false;
    body = document.getElementsByClassName("jeden");
    body[0].style.backgroundColor = "rgb(243, 243, 243)";
    font=document.getElementsByClassName("spa");
    fontm=font.length;
    for(var k=0; k<fontm;k++)
    {
        font[k].style.color = "black";
    }
    dark=document.getElementsByClassName("dark");
    dark[0].innerHTML ="🌙";

}
function dark_mode2()
{
    let x=document.querySelectorAll("li.me");
    n=x.length;
    for(var i=0;i<n;i++)
    {
        x[i].style.backgroundColor = "gray";
    }
    nav=document.getElementsByTagName("nav");
    nav[0].style.backgroundColor = "rgb(92, 88, 88)";
    mee=document.querySelectorAll("li.mee");
    m=mee.length;
    for(var j=0;j<m;j++)
    {
        mee[j].style.backgroundColor = "rgb(114, 114 ,114)";
    }
    czydark= true; 
    conte=document.getElementsByClassName("conte");
    conte[0].style.backgroundColor = "rgb(88, 88, 88)";
    conte[0].style.color = "white";
    font=document.getElementsByClassName("spa");
    fontm=font.length;
    for(var k=0; k<fontm;k++)
    {
        font[k].style.color = "white";
    }
    
    dark=document.getElementsByClassName("dark");
    dark[0].innerHTML ="🌞";
    dwa=document.getElementsByClassName("dwa");
    dwa[0].style.backgroundColor = "black";
}
function light_mode2()
{
    let x=document.querySelectorAll("li.me");
    n=x.length;
    for(var i=0;i<n;i++)
    {
        x[i].style.backgroundColor = "white";
    }
    nav=document.getElementsByTagName("nav");
    nav[0].style.backgroundColor = "rgb(236, 236, 236)";
    mee=document.querySelectorAll("li.mee");
    m=mee.length;
    for(var j=0;j<m;j++)
    {
        mee[j].style.backgroundColor = "rgb(221, 218, 218)";
    }
    czydark= false; 
    conte=document.getElementsByClassName("conte");
    conte[0].style.backgroundColor = "rgb(224, 224, 224)";
    conte[0].style.color = "black";
    font=document.getElementsByClassName("spa");
    fontm=font.length;
    for(var k=0; k<fontm;k++)
    {
        font[k].style.color = "black";
    }
    dark=document.getElementsByClassName("dark");
    dark[0].innerHTML ="🌞";
    dwa=document.getElementsByClassName("dwa");
    dwa[0].style.backgroundColor = "rgb(243, 243, 243)";
}
function liczenie()
{
    i++;
    if(i%2==1)
    {
        dark_mode();
    }
    else if(i%2==0)
    {
        light_mode();
    }
}
function liczenie2()
{
    j++;
    if(j%2==1)
    {
        dark_mode2();
    }
    else if(j%2==0)
    {
        light_mode2();
    }
}
function hover1()
{
    a=document.getElementById("aaa");
    if (czydark==false)
    {
        a.style.backgroundcolor = "none";
        a.style.backgroundcolor = "rgb(209, 205, 205)";
    }
    else if(czydark == true)
    {
        a.style.backgroundcolor = "yellow";
    }

}
function x()
{
    x=document.getElementById("koszyk");
    console.log(x);
    x.innerHTML = "koszyk: " + cena +"zł";  
}

function brb(form)
{
var y = form.ilosc.value;
cena=cena+(y*2.00);
x();
}
