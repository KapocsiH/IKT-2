var vnev = ["Kiss","Nagy","Élő","Kovács","Tóth","Szabó","Horváth","Németh","Molnár","Farkas","Papp","Balogh","Gál"];
var knev = ["József","Jenő","Balázs","Gábor","János","Hunor","Bálint","Balázs","Ármándó","Áron","Ádám","Péter","Dávid","Máté","Attila"];

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
    var c = document.getElementById("fej");
    var r = $('table tr').length;

    var d2 = new Date(0,0,0,0,4,21);


    c.innerHTML += 
    `<td>${r}</td>
    <td>${vnev[Math.floor(Math.random()*vnev.length)]} ${knev[Math.floor(Math.random()*knev.length)]}</td>
    `;
}
