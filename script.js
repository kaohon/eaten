var candyhtml = document.getElementById("candy");
var cpshtml = document.getElementById("cps");

let candy = 0;
let count = 0;
let count_s1 = 0;
let count_s2 = 0;
let cps = 1.0;

let counthour;
let countmin;
let countsec;

let counthour_s1;
let countmin_s1;
let countsec_s1;

var new_invalue = document.getElementById("candy_storage");
let elapsedsec = document.getElementById("elapsedsec");
let elapsedmin = document.getElementById("elapsedmin");
let elapsedhour = document.getElementById("elapsedhour");

let elapsedsec_s1 = document.getElementById("elapsedsec_s1");
let elapsedmin_s1 = document.getElementById("elapsedmin_s1");
let elapsedhour_s1 = document.getElementById("elapsedhour_s1");

const countUp = () => {
    candy = Number(candy) + cps;
    console.log(count++);
    console.log(count_s1++);
    candyhtml.innerHTML = Number(candy) + " キャンディー";
    cpshtml.innerHTML = cps;

    counthour = Math.floor(count / 60 / 60);
    countmin = Math.floor(count / 60) - Math.floor(count / 60 / 60) * 60;
    countsec = count - (countmin * 60 + counthour * 60 * 60);

    counthour_s1 = Math.floor(count_s1 / 60 / 60);
    countmin_s1 = Math.floor(count_s1 / 60) - Math.floor(count_s1 / 60 / 60) * 60;
    countsec_s1 = count_s1 - (countmin_s1 * 60 + counthour_s1 * 60 * 60);

    elapsedsec.innerHTML = countsec;
    elapsedmin.innerHTML = countmin;
    elapsedhour.innerHTML = counthour;

    elapsedsec_s1.innerHTML = countsec_s1;
    elapsedmin_s1.innerHTML = countmin_s1;
    elapsedhour_s1.innerHTML = counthour_s1;

    circuit.innerHTML = 1 + parseInt(counthour / 510);

    var fromDate = moment();
    var toDate = moment('2024-04-10');
    var rest_d = Math.floor(toDate.diff(fromDate, 's') / 60 / 60 / 24)
    var rest_h = toDate.diff(fromDate, 'h') - rest_d * 24;
    var rest_m = toDate.diff(fromDate, 'm') - toDate.diff(fromDate, 'h') * 60;
    var rest_s = toDate.diff(fromDate, 's') - toDate.diff(fromDate, 'm') * 60;

    season_rest.innerHTML = rest_d + "日" + rest_h + "時間" + rest_m + "分" + rest_s + "秒";

    // 比較
    if (fromDate.isAfter(toDate)) {
      pass.style.display = "none";
      pass_open.style.display = "none";
      rank.style.display = "none";
      rank_open.style.display = "none";
      clearInterval(countUpId);
    } else {

    }


// 検証ツールが開かれているかどうかを監視するための定期的なチェック
setInterval(function() {
  // 検証ツールを開発者向けコンソールを開いているかどうかを確認
  if (window.outerWidth - window.innerWidth > 150 || window.outerHeight - window.innerHeight > 150) {
    // 検証ツールが開かれている場合はページをリロードするなどの処理を行う
    console.error('!!!!!✖✖データの改ざん✖✖!!!!!');
    location.reload();
  }
}, 1000); // 1秒ごとにチェック
}
const countUpId = setInterval(countUp, 1000);

let stick_if = false;
let ecube_if = false;

let wand_if = false;
let dcwand_if = false;
let bwand_if = false;
let twand_if = false;
let lastwand_if = false;

let sword_if = false;
let dsword_if = false;
let tsword_if = false;
let lastsword_if = false;

let spear_if = false;
let bow_if = false;
let knife_if = false;
let feather_knife_if = false;

let stick = document.getElementById("stick");
let ecube = document.getElementById("ecube");
let wand = document.getElementById("wand");
let dcwand = document.getElementById("dcwand");
let bwand = document.getElementById("bwand");
let twand = document.getElementById("twand");
let lastwand = document.getElementById("lastwand");
let sword = document.getElementById("sword");
let dsword = document.getElementById("dsword");
let tsword = document.getElementById("tsword");
let lastsword = document.getElementById("lastsword");
let spear = document.getElementById("spear");
let bow = document.getElementById("bow");
let knife = document.getElementById("knife");
let feather_knife = document.getElementById("feather_knife");

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
  audio.currentTime = 0;
  audio.play()
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
    cps += 0.25;
    ecube.removeEventListener("click", ecubefunc);
  }
  audio.currentTime = 0;
  audio.play()
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
    cps += 0.25;
    wand.removeEventListener("click", wandfunc);
  }
  audio.currentTime = 0;
  audio.play()
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
    cps += 0.5;
    dcwand.removeEventListener("click", dcwandfunc);
  }
  audio.currentTime = 0;
  audio.play()
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
    cps += 0.75;
    bwand.removeEventListener("click", bwandfunc);
  }
  audio.currentTime = 0;
  audio.play()
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
    cps += 1.0;
    twand.removeEventListener("click", twandfunc);
  }
  audio.currentTime = 0;
  audio.play()
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
    cps += 2.0;
    lastwand.removeEventListener("click", lastwandfunc);
  }
  audio.currentTime = 0;
  audio.play()
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
    cps += 0.25;
    sword.removeEventListener("click", swordfunc);
  }
  audio.currentTime = 0;
  audio.play()
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
    cps += 0.5;
    dsword.removeEventListener("click", dswordfunc);
  }
  audio.currentTime = 0;
  audio.play()
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
    cps += 1.0;
    tsword.removeEventListener("click", tswordfunc);
  }
  audio.currentTime = 0;
  audio.play()
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
    cps += 4.0;
    lastsword.removeEventListener("click", lastswordfunc);
  }
  audio.currentTime = 0;
  audio.play()
}

spear.addEventListener("click", spearfunc);
function spearfunc() {
  if (candy < 180000) {
    alert("キャンディが不足しています!");
  } else {
    spear_if = true;
    spear.classList.add("bought");
    candy -= 180000;
    cps += 0.5;
    spear.removeEventListener("click", spearfunc);
  }
  audio.currentTime = 0;
  audio.play()
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
  }
  audio.currentTime = 0;
  audio.play()
}

knife.addEventListener("click", knifefunc);
function knifefunc() {
  if (candy < 180000) {
    alert("キャンディが不足しています!");
  } else {
    knife_if = true;
    knife.classList.add("bought");
    candy -= 180000;
    cps += 0.5;
    knife.removeEventListener("click", knifefunc);
  }
  audio.currentTime = 0;
  audio.play()
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
    cps += 1.0;
    feather_knife.removeEventListener("click", feather_knifefunc);
  }
  audio.currentTime = 0;
  audio.play()
}