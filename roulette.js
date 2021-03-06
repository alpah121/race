var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var cw=canvas.width;
var ch=canvas.height;


var PI=Math.PI;
var PI2=PI*2;

var wheel={
  cx:cw/2,
  cy:ch/2,
  radius:Math.min(cw,ch)/2-20,
  startAngle:PI,
  endAngle:PI2*2,
  totalSteps:360,
  currentStep:0,
}

requestAnimationFrame(animate);

function draw(w){
  var angle=easing(w);
  ctx.translate(w.cx,w.cy);
  ctx.rotate(angle);
  ctx.clearRect(0,0,cw,ch);
  ctx.beginPath();
  ctx.arc(0,0,w.radius,0,PI2);
  ctx.fillStyle='skyblue';
  ctx.strokeStyle='lightgray';
  ctx.lineWidth=3;
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle='red';
  ctx.font='18px verdana';
  ctx.textBaseline='middle';
  ctx.fillText('You Win!',40,0);
  ctx.setTransform(1,0,0,1,0,0);
  ctx.beginPath();
  ctx.moveTo(cw/2,ch/2);
  ctx.lineTo(cw/2+30,ch/2);
  ctx.strokeStyle='green';
  ctx.stroke();
}

function animate(time){
  if(wheel.currentStep>wheel.totalSteps){return;}
  draw(wheel);
  wheel.currentStep++;
  requestAnimationFrame(animate);
}
