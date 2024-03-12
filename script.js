var candyhtml = document.getElementById("candy");
var cpshtml = document.getElementById("cps");

let invalue = 0;
let candy = 0;
let count = 0;
let cps = 1.0;
const countUp = () => {
    console.log(candy++);
    console.log(count++);
    candyhtml.innerHTML = candy + " キャンディー";
    cpshtml.innerHTML = cps;

    counthour = Math.floor(count / 60 / 60);
    countmin = Math.floor(count / 60) - Math.floor(count / 60 / 60) * 60;
    countsec = count - (countmin * 60 + counthour * 60 * 60);

    elapsedsec.innerHTML = countsec;
    elapsedmin.innerHTML = countmin;
    elapsedhour.innerHTML = counthour;
    text = btoa(`${candy}\n${count}\n${countsec}\n${countmin}\n${counthour}\n${invalue}\n${stick_if}\n${ecube_if}\n${wand_if}\n${dcwand_if}\n${bwand_if}\n${twand_if}\n${lastwand_if}\n${sword_if}\n${dsword_if}\n${tsword_if}\n${lastsword_if}\n${spear_if}\n${bow_if}\n${knife_if}\n${feather_knife_if}`);
  }
  setInterval(countUp, 1000);

stick_if = false;
ecube_if = false;

wand_if = false;
dcwand_if = false;
bwand_if = false;
twand_if = false;
lastwand_if = false;

sword_if = false;
dsword_if = false;
tsword_if = false;
lastsword_if = false;

spear_if = false;
bow_if = false;
knife_if = false;
feather_knife_if = false;

var collectioneffect = () => {
  console.log(candy++);
  candyhtml.innerHTML = candy + " キャンディー";
}

stick.addEventListener("click", stickfunc);
function stickfunc() {
  if (candy < 10000) {
    alert("キャンディが不足しています!");
  } else {
    stick_if = true;
    stick.classList.add("bought");
    candy -= 10000;
    stick.removeEventListener("click", stickfunc);
  }
}

ecube.addEventListener("click", ecubefunc);

function ecubefunc() {
  if (candy < 50000) {
    alert("キャンディが不足しています!");
  } else if (stick_if === false) {
    alert("先にキャンディスティックを取得してください!");
  } else {
    ecube_if = true;
    ecube.classList.add("bought");
    candy -= 50000;
    cps += 0.1;
    ecube.removeEventListener("click", ecubefunc);
    setInterval(collectioneffect, 10000);
  }
}

wand.addEventListener("click", wandfunc);
function wandfunc() {
  if (candy < 60000) {
    alert("キャンディが不足しています!");
  } else if (ecube_if === false) {
    alert("先にエナジーキューブを取得してください!");
  } else if (sword_if === "pretrue") {
    alert("キャンディワンドとキャンディソードはどちらかしか選択できません!");
  } else if (lastsword_if === true || ecube_if === true) {
    wand_if = "pretrue";
    wand.classList.add("bought");
    candy -= 60000;
    cps += 0.1;
    wand.removeEventListener("click", wandfunc);
    setInterval(collectioneffect, 10000);
  }
}

dcwand.addEventListener("click", dcwandfunc);
function dcwandfunc() {
  if (candy < 110000) {
    alert("キャンディが不足しています!");
  } else if (wand_if === false) {
    alert("先にキャンディワンドを取得してください!");
  } else {
    dcwand_if = true;
    dcwand.classList.add("bought");
    candy -= 110000;
    cps += 0.2;
    dcwand.removeEventListener("click", dcwandfunc);
    setInterval(collectioneffect, 5000);
  }
}

bwand.addEventListener("click", bwandfunc);
function bwandfunc() {
  if (candy < 180000) {
    alert("キャンディが不足しています!");
  } else if (dcwand_if === false) {
    alert("先にダブルキューブ・キャンディワンドを取得してください!");
  } else {
    bwand_if = true;
    bwand.classList.add("bought");
    candy -= 180000;
    cps += 0.32;
    bwand.removeEventListener("click", bwandfunc);
    setInterval(collectioneffect, 3125);
  }
}

twand.addEventListener("click", twandfunc);
function twandfunc() {
  if (candy < 260000) {
    alert("キャンディが不足しています!");
  } else if (dcwand_if === false) {
    alert("先にダブルキューブ・キャンディワンドを取得してください!");
  } else {
    twand_if = true;
    twand.classList.add("bought");
    candy -= 260000;
    cps += 0.4;
    twand.removeEventListener("click", twandfunc);
    setInterval(collectioneffect, 2500);
  }
}

lastwand.addEventListener("click", lastwandfunc);
function lastwandfunc() {
  if (candy < 660000) {
    alert("キャンディが不足しています!");
  } else if (twand_if === false) {
    alert("先に超絶キャンディワンド改・ターボを取得してください!");
  } else {
    wand_if = true;
    lastwand_if = true;
    lastwand.classList.add("bought");
    candy -= 660000;
    cps += 0.8;
    lastwand.removeEventListener("click", lastwandfunc);
    setInterval(collectioneffect, 1250);
  }
}

sword.addEventListener("click", swordfunc);
function swordfunc() {
  if (candy < 60000) {
    alert("キャンディが不足しています!");
  } else if (ecube_if === false) {
    alert("先にエナジーキューブを取得してください!");
  } else if (wand_if === "pretrue") {
    alert("キャンディワンドとキャンディソードはどちらかしか選択できません!");
  } else if (lastwand_if === true || ecube_if === true) {
    sword_if = "pretrue";
    sword.classList.add("bought");
    candy -= 60000;
    cps += 0.1;
    sword.removeEventListener("click", swordfunc);
    setInterval(collectioneffect, 10000);
  }
}

dsword.addEventListener("click", dswordfunc);
function dswordfunc() {
  if (candy < 120000) {
    alert("キャンディが不足しています!");
  } else if (sword_if === false) {
    alert("先にキャンディソードを取得してください!");
  } else {
    dsword_if = true;
    dsword.classList.add("bought");
    candy -= 120000;
    cps += 0.2;
    dsword.removeEventListener("click", dswordfunc);
    setInterval(collectioneffect, 5000);
  }
}

tsword.addEventListener("click", tswordfunc);
function tswordfunc() {
  if (candy < 220000) {
    alert("キャンディが不足しています!");
  } else if (dsword_if === false) {
    alert("先にデュアル・キャンディソードを取得してください!");
  } else {
    tsword_if = true;
    tsword.classList.add("bought");
    candy -= 220000;
    cps += 0.4;
    tsword.removeEventListener("click", tswordfunc);
    setInterval(collectioneffect, 2500);
  }
}

lastsword.addEventListener("click", lastswordfunc);
function lastswordfunc() {
  if (candy < 860000) {
    alert("キャンディが不足しています!");
  } else if (tsword_if === false) {
    alert("先に超絶キャンディソード改・ターボを取得してください!");
  } else {
    sword_if = true;
    lastsword_if = true;
    lastsword.classList.add("bought");
    candy -= 860000;
    cps += 1.6;
    lastsword.removeEventListener("click", lastswordfunc);
    setInterval(collectioneffect, 625);
  }
}

spear.addEventListener("click", spearfunc);
function spearfunc() {
  if (candy < 180000) {
    alert("キャンディが不足しています!");
  } else {
    spear_if = true;
    spear.classList.add("bought");
    candy -= 180000;
    cps += 0.32;
    spear.removeEventListener("click", spearfunc);
    setInterval(collectioneffect, 3125);
  }
}

bow.addEventListener("click", bowfunc);
function bowfunc() {
  if (candy < 300000) {
    alert("キャンディが不足しています!");
  } else {
    bow_if = true;
    bow.classList.add("bought");
    candy -= 300000;
    cps += 0.5;
    bow.removeEventListener("click", bowfunc);
    setInterval(collectioneffect, 2000);
  }
}

knife.addEventListener("click", knifefunc);
function knifefunc() {
  if (candy < 180000) {
    alert("キャンディが不足しています!");
  } else {
    knife_if = true;
    knife.classList.add("bought");
    candy -= 180000;
    cps += 0.32;
    knife.removeEventListener("click", knifefunc);
    setInterval(collectioneffect, 3125);
  }
}

feather_knife.addEventListener("click", feather_knifefunc);
function feather_knifefunc() {
  if (candy < 360000) {
    alert("キャンディが不足しています!");
  } else if (knife_if === false) {
    alert("先にキャンディ・ナイフを取得してください!");
  } else {
    feather_knife_if = true;
    feather_knife.classList.add("bought");
    candy -= 360000;
    cps += 0.6;
    feather_knife.removeEventListener("click", feather_knifefunc);
    setInterval(collectioneffect, 1875);
  }
}