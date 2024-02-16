var a = document.getElementById("s3-h1");
var b = document.getElementById("s3-h2");
var i = 0;
function fun() {
  if (i <= 15) {
    a.innerHTML = i;
    a.style.color = "#df9a07";
  }
  if (i <= 50) {
    b.innerHTML = i;
    b.style.color = "#df9a07";
  }
  i++;
}
setInterval("fun()", 400);
// section 2
var s = document.getElementById("s1-nav");
s.style.backgroundColor = "transparent";
function s2() {
  s.style.backgroundColor = "black";
}

// section 3
var z = document.getElementById("s3-d1");
var x = document.getElementById("s3-icon1");

function s3() {
  z.style.backgroundColor = "#f5a80e";
  x.style.color = "white";
}
function s31() {
  z.style.backgroundColor = "white";
  x.style.color = "#f5a80e";
}

var y = document.getElementById("s3-d2");
var w = document.getElementById("s3-icon2");
function s32() {
  y.style.backgroundColor = "#f5a80e";
  w.style.color = "white";
}
function s33() {
  y.style.backgroundColor = "white";
  w.style.color = "#f5a80e";
}
var m = document.getElementById("s3-d3");
var n = document.getElementById("s3-icon3");
function s34() {
  m.style.backgroundColor = "#f5a80e";
  n.style.color = "white";
}
function s35() {
  m.style.backgroundColor = "white";
  n.style.color = "#f5a80e";
}
var p = document.getElementById("s3-d4");
var o = document.getElementById("s3-icon4");
function s36() {
  p.style.backgroundColor = "#f5a80e";
  o.style.color = "white";
}
function s37() {
  p.style.backgroundColor = "white";
  o.style.color = "#f5a80e";
}
