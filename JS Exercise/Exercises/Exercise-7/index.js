var body = document.body;

var container = document.createElement("div");
container.className = "container";
container.style.position = "relative";
container.style.width = 80 + "%";
container.style.height = 500 + "px";
container.style.backgroundColor = "aquamarine";
container.style.border = "2px solid red";
body.appendChild(container);

function plot(points) {
  var style =
    "position: absolute; " +
    "height: 10px; " +
    "width: 10px; " +
    "border-radius: 50%; " +
    "background-color: blue ";

  points.forEach(function (point) {
    var dot = document.createElement("div");
    dot.style.cssText = style;
    dot.style.left = point.x + "px";
    dot.style.top = point.y + "px";
    container.appendChild(dot);
  });
}

var points = [
  { x: 10, y: 20 },
  { x: 40, y: 40 },
  { x: 60, y: 20 },
  { x: 90, y: 20 },
  { x: 60, y: 70 },
  { x: 100, y: 200 },
  { x: 400, y: 400 },
  { x: 600, y: 200 },
  { x: 900, y: 200 },
  { x: 600, y: 70 },
];


plot(points);
