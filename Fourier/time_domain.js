var c = document.getElementById("canvas_time_domain");
var ctx = c.getContext("2d");
//x axis
ctx.beginPath();
ctx.lineWidth = "2";
ctx.strokeStyle = "white";  //
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();  // Draw it
//y axis
ctx.beginPath();
ctx.lineWidth = "2";
ctx.strokeStyle = "white";  //
ctx.moveTo(10, 200);
ctx.lineTo(10, 0);
ctx.stroke();  // Draw it
//setup signal
var signal = [];
for(let i=0;i<20;i++){
    signal.push(0);
}
for(let i=0;i<10;i++){
    signal.push(1);
}
for(let i=0;i<20;i++){
    signal.push(0);
}
ctx.translate(0,100);
for (let t = 0; t < signal.length; t++) {
  ctx.fillStyle="yellow";
  ctx.fillRect(t*2-1+10,signal[t]*50-1,2,2);
  //ctx.fillRect(t*2-1+10,Math.cos(5*2*Math.PI/signal.length*t)*50-1,2,2);
}
