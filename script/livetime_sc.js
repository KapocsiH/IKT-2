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
    timerr.innerText = d.toLocaleTimeString([],{hour: "2-digit", minute: "2-digit", second:"2-digit"});
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

    console.log(nevOpen.length);
    //<td>${vnev[Math.floor(Math.random()*vnev.length)]} ${knev[Math.floor(Math.random()*knev.length)]}</td>

    for (let i = 0; i < nevOpen.length+1; i++) {
        var r = $('table tr').length;
        var ra = Math.floor(Math.random()*nevCl.length);

        

        c.innerHTML += 
        `<td>${r}</td>
        <td>${nevCl[ra]}</td>
        `;

        nevCl = nevCl.splice(ra,1);
        console.log(nevOpen.length,i,ra);
    }
    
}
