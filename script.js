function buttonFunction() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 200, 200);
  ctx.fillStyle = "#00FF00";

  ctx.fillRect(0, 0, 10, 10);

  ctx.fillRect(20, 20, 10, 10);

  ctx.fillRect(40, 40, 10, 10);
}