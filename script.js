function buttonFunction() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#24afdaff";
  ctx.fillRect(20, 20, 150, 75);
  ctx.fillStyle = "#5e2f03ff";
ctx.fillRect(40, 40, 10, 10);

  ctx.fillRect(20, 20, 10, 10);

   
} 

function buttonFunction1() {  
    var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f0f0f0ff";
  ctx.fillRect(20, 20, 150, 75);
  ctx.fillStyle = "#7e2c73ff";
for (let i = 20; i < 130; i += 20){
    ctx.fillRect(i, i, 10, 10,);
}
for (let i = 20; i < 130; i += 20){
    ctx.fillRect(140-i, i, 10, 10,);
}
}
   

function buttonFunction2() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f0f0f0ff";
  ctx.fillRect(20, 20, 150, 75);
  ctx.fillStyle = "#7e2c73ff";
for (let i = 20; i < 130; i += 20){
   for (let j = 20; j < 130; j += 20){
    ctx.fillRect(j, i, 10, 10,);
}
}
   



}