// $(document).ready(function(){
//     $("#btn").click(
//         function (){
//             $("#test").load("data.txt");
//         }
//     );
  
// });

function bth(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://de.assettohosting.com:10926/live-timing', true);

    xhr.onprogress = function(){
        console.log('On progress');
    }

    xhr.onload = function(){
        console.log(this.responseText)
    }

    xhr.send();
}
