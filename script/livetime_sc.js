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
            console.log(rounds);
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


        c.innerHTML += 
        `<td>${r}</td>
        <td>${nevCl[ra]}</td>
        <td>0:${cl[i].toLocaleTimeString([],{second:"2-digit",})}.${cl[i].getMilliseconds()}</td>
        <td>0:${ll[i].toLocaleTimeString([],{second:"2-digit",})}.${ll[i].getMilliseconds()}</td>
        <td>0:${bl[i].toLocaleTimeString([],{second:"2-digit",})}.${bl[i].getMilliseconds()}</td>
        `;

        nevCl.splice(ra,1);
        console.log(nevCl);
        console.log(nevOpen.length,i,ra);
    }
    
}
