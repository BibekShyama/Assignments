var body = document.body;
var ballContainer = document.createElement("div");
var ball = document.createElement("div");
var positionTop = 0;
var speed = 10;
var bounceHeight;

function drawBallConatiner(height, width) {
  ballContainer.className = "ball-container";
  ballContainer.style.position = "relative";
  ballContainer.style.width = `${width}px`;
  ballContainer.style.height = `${height}px`;
  ballContainer.style.border = "2px red solid";
  body.appendChild(ballContainer);
}

function drawBall(diameter) {
  // var css =
  //   "position:absolute" +
  //   "height:" +
  //   diameter +
  //   "px" +
  //   "width:" +
  //   diameter +
  //   "px;" +
  //   "border-radius:50%" +
  //   "background-color:black" +
  //   "top:0" +
  //   "left:50%";

  // ball.style.cssText = css;
  ball.style.position = "absolute";
  ball.style.height = `${diameter}px`;
  ball.style.width = `${diameter}px`;
  ball.style.backgroundColor = "black";
  ball.style.top = 0 + "px";
  ball.style.left = parseInt(ballContainer.style.width) / 2 + "px";
  ball.style.borderRadius = 50 + "%";
  ballContainer.appendChild(ball);
  bounceHeight = parseInt(ballContainer.style.height) - diameter;
}

function bounce() {
  positionTop = parseInt(ball.style.top);
  positionTop += speed;
  ball.style.top = positionTop + "px";

  if (positionTop <= 0 || positionTop >= bounceHeight) {
    speed *= -1;
  }
  // console.log("topposition:", positionTop);
  window.requestAnimationFrame(bounce);
}

drawBallConatiner(500, 500);

drawBall(50);
window.requestAnimationFrame(bounce);
