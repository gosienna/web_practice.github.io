//discrete fourier transform
var input=signal;
var N=input.length; //get numbers of analysis frequncy:equals to sample numbers
var a=[];//list for fourier coefficiency cosine part
var b=[];//list for fourier coefficiency sine part
var c=[];//list for the amplitude
for(let k=0;k<N;k++){ // run a for loop to calculate
    var sum_a=0;
    for(let t=0;t<N;t++){ //calculate coeffiency for k
      sum_a=sum_a+input[t]*Math.cos(k*2*Math.PI/N*t);
    }
    a.push(sum_a);
    var sum_b=0;
    for(let t=0;t<N;t++){ //calculate coeffiency for k
      sum_b=sum_b-input[t]*Math.sin(k*2*Math.PI/N*t);
    }
    b.push(sum_b);
    c.push(Math.sqrt(Math.pow(sum_a,2)+Math.pow(sum_b,2)));
}
var c2 = document.getElementById("canvas_frequency_domain");
var ctx2 = c2.getContext("2d");
//plot the frequncy amplitude
ctx2.save();
ctx2.translate(10,100);
for (let k = 0; k < N; k++) {
  ctx2.fillStyle="yellow";
  ctx2.fillRect(k*4-1,c[k]*2-1,2,2);
  console.log(c[k]);
}
ctx2.restore();
//x axis
ctx2.beginPath();
ctx2.lineWidth = "2";
ctx2.strokeStyle = "white";  //
ctx2.moveTo(0, 100);
ctx2.lineTo(300, 100);
ctx2.stroke();  // Draw it
//y axis
ctx2.beginPath();
ctx2.lineWidth = "2";
ctx2.strokeStyle = "white";  //
ctx2.moveTo(10, 0);
ctx2.lineTo(10, 200);
ctx2.stroke();  // Draw it
