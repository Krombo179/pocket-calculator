let answer="";
let works="";
let standby="";
let temporaryorary="";
let count=0

function n(num) {
  if(document.getElementById("screen").innerHTML=="+"||document.getElementById("screen").innerHTML=="-"||document.getElementById("screen").innerHTML=="*"||document.getElementById("screen").innerHTML=="/") {
    works+=document.getElementById("screen").innerHTML
    document.getElementById("screen").innerHTML=""
  } if (document.getElementById("screen").innerHTML=="0") {
    document.getElementById("screen").innerHTML=""
  } if (document.getElementById("screen").innerHTML==answer) {
    document.getElementById("screen").innerHTML=""
  } if (standby.length > 8) {
  } else {
    standby=standby+num
    temporary = document.getElementById("screen").innerHTML+num
    document.getElementById("screen").innerHTML = temporary.toLocaleString();
    if (document.getElementById("screen").innerHTML=="-"+standby) {
    } else {
      standby = document.getElementById("screen").innerHTML
    }
  }
}

function rid() {
  document.getElementById("screen").innerHTML="0"
  answer=""
  works=""
  standby=""
}

function equals() {
  if (document.getElementById("screen").innerHTML =="+"||document.getElementById("screen").innerHTML=="-"||document.getElementById("screen").innerHTML=="*"||document.getElementById("screen").innerHTML=="/") {
  } else {
  works+=standby
  standby=""
  answer=eval(works)
  document.getElementById("screen").innerHTML=answer.toLocaleString();
  if (answer=="Infinity") {
    document.getElementById("screen").innerHTML="Infinity is Invalid"
  } else if (answer>=1000000000) {
    let exponent=answer.toString().length-1;
    answer=answer/(10 ** (exponent))
    document.getElementById('screen').innerHTML=answer.toFixed(7)+'e'+exponent;
    }
  }
}

function flop() {
  if (document.getElementById("screen").innerHTML=="-"+standby) {
    document.getElementById("screen").innerHTML=standby
  } else if (document.getElementById("screen").innerHTML.indexOf("-")==0&&document.getElementById("screen").innerHTML!="-"+ answer) {
    document.getElementById("screen").innerHTML=standby
  } else if (document.getElementById("screen").innerHTML==answer){
    document.getElementById("screen").innerHTML="-"+answer
  } else if (document.getElementById("screen").innerHTML=="-"+answer){
    document.getElementById("screen").innerHTML=answer
  } else {
    document.getElementById("screen").innerHTML="-"+standby
  }
}

function percent() {
  if (document.getElementById("screen").innerHTML.indexOf("-")==0) {
    standby=eval(standby*0.01).toFixed(7)
    document.getElementById("screen").innerHTML="-"+standby
  } else {
    standby=eval(standby*0.01).toFixed(7)
    document.getElementById("screen").innerHTML=standby
  }
}

function decimal() {
  if (document.getElementById("screen").innerHTML.indexOf(".")!==-1){
    document.getElementById("screen").innerHTML=document.getElementById("screen").innerHTML
    } else {
    document.getElementById("screen").innerHTML+="."
    }
  }

function add() {
  if (document.getElementById("screen").innerHTML=="+"||document.getElementById("screen").innerHTML=="-"||document.getElementById("screen").innerHTML=="*"||document.getElementById("screen").innerHTML=="/") {
    document.getElementById("screen").innerHTML="+"
  } else if (standby="") {
  } else if (document.getElementById("screen").innerHTML==answer.toLocaleString()) {
    works=answer
    document.getElementById("screen").innerHTML ="+"
  } else {
    works+=document.getElementById("screen").innerHTML
    standby=""
    document.getElementById("screen").innerHTML = "+"
  }
}

function minus() {
  if(document.getElementById("screen").innerHTML=="+"||document.getElementById("screen").innerHTML=="-"||document.getElementById("screen").innerHTML=="*"||document.getElementById("screen").innerHTML=="/") {
  document.getElementById("screen").innerHTML="-"
  } else if (standby=""){
  } else if (document.getElementById("screen").innerHTML==answer.toLocaleString()) {
    works=answer
    document.getElementById("screen").innerHTML="-"
  } else {
    works+=document.getElementById("screen").innerHTML
    standby=""
    document.getElementById("screen").innerHTML="-"
  }
}

function multiply() {
  if (document.getElementById("screen").innerHTML=="+"||document.getElementById("screen").innerHTML=="-"||document.getElementById("screen").innerHTML=="*"||document.getElementById("screen").innerHTML=="/") {
    document.getElementById("screen").innerHTML="*"
  } else if (standby=""){
  } else if (document.getElementById("screen").innerHTML==answer.toLocaleString()){
    works=answer
    document.getElementById("screen").innerHTML="*"
  } else {
    works+=document.getElementById("screen").innerHTML
    standby=""
    document.getElementById("screen").innerHTML="*"
  }
}

function divide() {
  if (document.getElementById("screen").innerHTML=="+"||document.getElementById("screen").innerHTML=="-"||document.getElementById("screen").innerHTML=="*"||document.getElementById("screen").innerHTML=="/"){
    document.getElementById("screen").innerHTML="/"
  } else if (standby=""){
  } else if (document.getElementById("screen").innerHTML==answer.toLocaleString()){
    works=answer
    document.getElementById("screen").innerHTML="/"
  } else {
    works+=document.getElementById("screen").innerHTML
    standby=""
    document.getElementById("screen").innerHTML="/"
  }
}

function website() {
  window.open("https://www.off---white.com/");
}
