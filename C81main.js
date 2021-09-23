canvas=document.getElementById("canpop");
ctx=canvas.getContext("2d");
color="blue";

ctx.beginPath();
ctx.color=color;
ctx.lineWidth=2;
ctx.arc(100, 100, 70 ,0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", mymouse);
function mymouse(e) {
    mousex=e.clientX - canvas.offsetLeft; 
    mousey=e.clientY - canvas.offsetTop;
    circle(mousex, mousey);

}
function circle(mousex, mousey){
    ctx.beginPath();
ctx.color=color;
ctx.lineWidth=2;
ctx.arc(mousex, mousey, 70 ,0, 2*Math.PI);
ctx.stroke();
}