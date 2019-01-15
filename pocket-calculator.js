let numbers=[];
let decimals=false;

function rid() {
  let p=document.getElementById("screen");
  numbers.pop();
  numbers.pop();
  numbers.pop();
  numbers.pop();
  numbers.pop();
  numbers.pop();
  numbers.pop();
  numbers.pop();
  numbers.pop();
  p.innerHTML="0";
}

function flop() {
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function percent() {
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function divide() {
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function seven() {
  if(numbers.length<9) {
    numbers.push(7)
  }
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function eight() {
  if(numbers.length<9) {
    numbers.push(8)
  }
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function nine() {
  if(numbers.length<9) {
    numbers.push(9)
  }
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function multiply() {
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function four() {
  if(numbers.length<9) {
    numbers.push(4)
  }
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function five() {
  if(numbers.length<9) {
    numbers.push(5)
  }
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function six() {
  if(numbers.length<9) {
    numbers.push(6)
  }
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function minus() {
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function one() {
  if(numbers.length<9) {
    numbers.push(1)
  }
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function two() {
  if(numbers.length<9) {
    numbers.push(2)
  }
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function three() {
  if(numbers.length<9) {
    numbers.push(3)
  }
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function add() {
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function decimal() {
  if(numbers.length<9 && decimals===false) {
    numbers.push(".")
  }
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
  decimal=true;
}

function zero() {
  if(numbers.length<9) {
    numbers.push(0)
  }
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}

function equals() {
  let p=document.getElementById("screen");
  p.innerHTML=`${numbers.join("")}`;
}
