window.onload=function(){
    document.getElementById('full-screen').addEventListener('click',function(){
        if(document.documentElement.requestFullscreen){
            document.documentElement.requestFullscreen();
        }else if(document.documentElement.webkitRequestFullscreen){
            document.documentElement.webkitRequestFullscreen();
        }else if(document.documentElement.mozRequestFullscreen){
            document.documentElement.mozRequestFullscreen();
        }else if(document.documentElement.msRequestFullscreen){
            document.documentElement.msRequestFullscreen();
        }
    });
}

document.addEventListener('mousemove',(e)=>{
    var realCursorX=e.clientX;
    var realCursorY=e.clientY;

    var fakeCursors=document.querySelectorAll('.fake_cursor');

    fakeCursors.forEach((cursor)=>{
        var offsetX=Math.random()*1400-800;
        var offsetY=Math.random()*1400-800;

        cursor.style.left=(realCursorX+offsetX)+'px';
        cursor.style.top=(realCursorY+offsetY)+'px';
    });
});

function createFakeCursors(count){
    for(let i=0;i<count;i++){
        var fakeCursor=document.createElement('div');
        fakeCursor.classList.add('fake_cursor');
        document.body.appendChild(fakeCursor);

    }
}

createFakeCursors(1000);

