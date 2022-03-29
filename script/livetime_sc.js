// var vnev = ["Kiss","Nagy","Élő","Kovács","Tóth","Szabó","Horváth","Németh","Molnár","Farkas","Papp","Balogh","Gál"];
// var knev = ["József","Jenő","Balázs","Gábor","János","Hunor","Bálint","Balázs","Ármándó","Áron","Ádám","Péter","Dávid","Máté","Attila"];
const nevOpen = ["Csicsman Krisztián","Szabó Balázs","Hegedűs Csaba","Szűcs Tamás","H. D","Csibi Ottó","Bertók Szabolcs","Kazai Dávid","Hofbauer András","Boda Marcell","Vojtek Viktor","Ambrus Krisztián","Alperen Ayar","Nógrádi Sánodr","Lehaci Marian","Dudás Benjamin","Puskás Zsombor","Martin Horvath","Lucas Hoferichte","Pető Bálint","Puskás András","Reinhardt Benjámin","Kapocsi Hunor","Forgács Ákos","Zsidi Bálint","Burkovics Péter","Horváth Gracián","Eisler Péter","Cosmin Andrei","Mehdi Alaoui"];

var d = new Date(0,0,0,2,4,21);
var timerr = document.getElementById("timer");

var joined = false;


// setInterval( () => {
//     console.log('valami')
// }, 1000);

function tm(){
    
    
    // document.getElementById("timer").innerText = `0${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    
}
setInterval( () =>{
    d.setMilliseconds(-1);
    dStr = d.toLocaleTimeString([],{hour: "2-digit", minute: "2-digit", second:"2-digit"});
    timerr.innerText = dStr.substring(0,dStr.search(" "));
},1000);


function jo(v){
    var t = document.getElementById("ember").textContent;
    t = Number(t);
    if(!joined && v){
        joined = true;
        document.getElementById("ember").innerText = t+1;
    }
    if(joined && !v){
        joined = false;
        document.getElementById("ember").innerText = t-1;
    }
}

function addem(){
    var nevCl = nevOpen;
    var c = document.getElementById("fej");

    var d2 = new Date(0,0,0,0,4,21);

    var noHossz = nevOpen.length;
    console.log(noHossz);

    var rounds = [];
    rounds[0] = Math.floor(Math.random()*17) + 1;
    //<td>${vnev[Math.floor(Math.random()*vnev.length)]} ${knev[Math.floor(Math.random()*knev.length)]}</td>
    var cl = [];
    var ll = [];
    var bl = [];

    for (let i = 0; i < noHossz; i++) {
        if (i != 0){
            if(Math.floor(Math.random() * 10) < 9){
                rounds[i] = rounds[i-1];
            }
            else{
                if(rounds[i-1] == 1){
                    rounds[i] = 1;
                }
                else{
                    rounds[i] = rounds[i-1] -1;
                }
            }
            //console.log(rounds);
        }
        var r = $('table tr').length;
        var ra = Math.floor(Math.random()*nevCl.length);


        //var sc = Math.floor(Math.random() * 12) + 37;

        var cl1 = Math.floor(Math.random() * 12) + 37;
        var cl2 = Math.floor(Math.random() * 881) + 100;
        var ll1 = 0;
        var ll2 = 0;
        var bl1 = 0;
        var bl2 = 0;
        
        if(Math.floor(Math.random() * 10) < 5){
            ll1 = cl1 + Math.floor(Math.random() * 3);
        }
        else{
            ll1 = cl1 - Math.floor(Math.random() * 3);
        }
        ll2 = Math.floor(Math.random() * 881) + 100;

        if(ll1>cl1){
            bl1 = ll1 + Math.floor(Math.random() * 5);
        }
        else{
            bl1 = cl1 + Math.floor(Math.random() * 5);
        }

        if(bl1 == ll1){
            bl2 = ll2;
        }
        else if(bl1 == cl1){
            bl2 = cl2;
        }
        else{
            bl2 = Math.floor(Math.random() * 881) + 100;
        }

        cl[i] = new Date(0,0,0,0,0,cl1,cl2);
        ll[i] = new Date(0,0,0,0,0,ll1,ll2);
        bl[i] = new Date(0,0,0,0,0,bl1,bl2);

        //gap legjobbhoz képest
        var blO = Number(bl[i].toLocaleTimeString([],{second:"2-digit",})+"."+bl[i].getMilliseconds());
        var clO = Number(cl[i].toLocaleTimeString([],{second:"2-digit",})+"."+cl[i].getMilliseconds());
        var gap = "xd";
        if(blO>clO){
            gap = String(Number(blO - clO).toFixed(3))+"0000";
            gap = "00:0" + gap.substring(0,gap.indexOf(".")+4);
            /*var gap2 = new Date(0,0,0,0,0,
                gap.substring(0,gap.indexOf(".")),
                gap.substring(gap.indexOf(".")+1)
                );*/
            //console.log(gap2);
        }
        else{
            gap = "NEW BEST";
        }

        //265-285
        var ts = 285 - Math.floor(Math.random()*35);

        c.innerHTML += 
        `<td>${r}</td>
        <td class="fw-bold">${nevCl[ra]}</td>
        <td>01:${cl[i].toLocaleTimeString([],{second:"2-digit",})+"."+cl[i].getMilliseconds()}</td>
        <td>01:${ll[i].toLocaleTimeString([],{second:"2-digit",})}.${ll[i].getMilliseconds()}</td>
        <td>01:${bl[i].toLocaleTimeString([],{second:"2-digit",})+"."+bl[i].getMilliseconds()}</td>
        ${gap=="NEW BEST" ? "<td class='fw-bold newb'>"+gap+"</td>":"<td>"+gap+"</td>"}
        <td>${ts}</td>
        `;

        nevCl.splice(ra,1);
        //console.log(nevCl);
        //console.log(nevOpen.length,i,ra);
    }
    
}

var lang = 0;
var langName = "EN";
var cd = {};
function nyelv(){

    switch (lang) {
        case 0:
            lang = 1;
            langName = "HU";
            break;
        case 1:
            lang = 2;
            langName = "ZH";
            break;
        case 2:
            lang = 0;
            langName = "EN";
            break;
    
        default:
            lang = 0;
            langName = "EN";
            break;
    }

    // if(lang == 0){
    //     lang = 1;
    // }
    // else{
    //     lang = 0;
    // }
    loc(lang);
}

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

function loc(hanyadik){
    var l = ['script/en.json','script/hu.json','script/cn.json'];
    loadJSON(l[hanyadik],
        //function(data) { console.log(data); },
        function(data) { cd = data; console.log(cd); re(data); },
        function(xhr) { console.error(xhr); }
    );
}

function re(data){
    document.getElementById("title").textContent = data.title;
    document.getElementById("altitle").textContent = data.where;
    // document.getElementById("join").textContent = data.join;
    // document.getElementById("leave").textContent = data.leave;

    document.getElementById("driver").textContent = data.driver;
    document.getElementById("cl").textContent = data.cl;
    document.getElementById("ll").textContent = data.ll;
    document.getElementById("bl").textContent = data.bl;
    document.getElementById("gap").textContent = data.gap;
    document.getElementById("ts").textContent = data.ts;

    document.getElementById("l1").src = data.l1;

    for (const nbi in document.getElementsByClassName("newb")) {
        document.getElementsByClassName("newb")[nbi].textContent = data.newb;
    }

    /*for (const dl in document.getElementsByClassName("tomorrow")) {
        var o = document.getElementsByClassName("tomorrow")[dl];
        var p = o.parentElement;
        p.removeChild(o);
        p.innerHTML += `<div class="tomorrow"
        data-location-id="051311"
        data-language="EN"
        data-unit-system="METRIC"
        data-skin="dark"
        data-widget-type="upcoming">
       <a href="https://www.tomorrow.io/weather/"
         rel="nofollow noopener noreferrer"
         target="_blank">
       </a>
     </div>`;
        
        //document.getElementsByClassName("tomorrow")[dl].setAttribute("data-language",langName);
        //document.getElementsByClassName("tomorrow")[dl].setAttribute("data-rendered",false);
        
    }*/

    var p = document.getElementById("parent");
    var o = p.firstElementChild;

    console.log(o);

    p.removeChild(o);

    p.innerHTML += `<div class="tomorrow"
         data-location-id="051311"
         data-language=${langName}
         data-unit-system="METRIC"
         data-skin="dark"
         data-widget-type="upcoming">
        <a href="https://www.tomorrow.io/weather/"
          rel="nofollow noopener noreferrer"
          target="_blank">
        </a>
      </div>`
    ;

    // for (const oo in document.getElementsByClassName("tomorrow")) {
    //     o = document.getElementsByClassName("tomorrow")[oo];
    //     p.innerHTML += `<div class="tomorrow"
    //     data-location-id="051311"
    //     data-language="EN"
    //     data-unit-system="METRIC"
    //     data-skin="dark"
    //     data-widget-type="upcoming">
    //    <a href="https://www.tomorrow.io/weather/"
    //      rel="nofollow noopener noreferrer"
    //      target="_blank">
    //    </a>
    //  </div>`;
    // }

    (function(d, s, id) {
        if (d.getElementById(id)) {
            if (window.__TOMORROW__) {
                window.__TOMORROW__.renderWidget();
            }
            return;
        }
        const fjs = d.getElementsByTagName(s)[0];
        const js = d.createElement(s);
        js.id = id;
        js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'tomorrow-sdk');
}
