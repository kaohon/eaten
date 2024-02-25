var candyhtml = document.getElementById("candy");

let invalue = 0;
let candy = 0;
let count = 0;
const countUp = () => {
    console.log(candy++);
    console.log(count++);
    candyhtml.innerHTML = candy + " キャンディー";

    counthour = Math.floor(count / 60 / 60);
    countmin = Math.floor(count / 60) - Math.floor(count / 60 / 60) * 60;
    countsec = count - (countmin * 60 + counthour * 60 * 60);

    elapsedsec.innerHTML = countsec;
    elapsedmin.innerHTML = countmin;
    elapsedhour.innerHTML = counthour;
    text = btoa(`${candy}\n${count}\n${countsec}\n${countmin}\n${counthour}\n${invalue}\n${stick_if}\n${ecube_if}\n${wand_if}\n${dcwand_if}\n${bwand_if}\n${twand_if}\n${lastwand_if}\n${sword_if}\n${dsword_if}\n${tsword_if}\n${lastsword_if}`);
  }
  setInterval(countUp, 1000);

  day1 = 0;
  day2 = 0;
  day3 = 0;
  day4 = 0;
  day5 = 0;
  day6 = 0;
  day7 = 0;

  const countday1 = () => {
    day1 = candy;
  }
  setInterval(countday1, 60000);

  const countday2 = () => {
    day2 = candy;
  }
  setInterval(countday2, 120000);

  const countday3 = () => {
    day3 = candy;
  }
  setInterval(countday3, 180000);

  const countday4 = () => {
    day4 = candy;
  }
  setInterval(countday4, 240000);

  const countday5 = () => {
    day5 = candy;
  }
  setInterval(countday5, 300000);

  const countday6 = () => {
    day6 = candy;
  }
  setInterval(countday6, 360000);

  const countday7 = () => {
    day7 = candy;
  }
  setInterval(countday7, 420000);

  let ctx = document.getElementById('ex_chart');  
  let ctx2 = document.getElementById('ex_chart2');  

  let chart = new Chart(ctx2, {
    type: 'line',
    data: { 
      labels: ["7日前", "6日前", "5日前", "4日前", "3日前", "2日前", "1日前"],
    datasets: [{
        label: 'キャンディ数',
        data: [],
        borderColor: 'rgba(255, 100, 100, 1)'
    },
    ],
    }
});
setInterval(function() {
  chart.data.datasets[0].data = [
      day7,
      day6,
      day5,
      day4,
      day3,
      day2,
      day1,
  ];
  chart.update();
}, 1000);

  let chart2 = new Chart(ctx, {
    type: 'line',
    data: { 
      labels: ["7日前", "6日前", "5日前", "4日前", "3日前", "2日前", "1日前", "現在"],
    datasets: [{
    label: 'プレイ時間',
    data: [],
    borderColor: 'rgba(100, 100, 255, 1)'
  },
],
}
});
setInterval(function() {
chart2.data.datasets[0].data = [
  counthour, 
  counthour, 
  counthour, 
  counthour, 
  counthour
];
chart2.update();
}, 1000);

stick_if = "false";
ecube_if = "false";

wand_if = "false";
dcwand_if = "false";
bwand_if = "false";
twand_if = "false";
lastwand_if = "false";

sword_if = "false";
dsword_if = "false";
tsword_if = "false";
lastsword_if = "false";

var collectioneffect = () => {
  console.log(candy++);
  candyhtml.innerHTML = candy + " キャンディー";
}

stick.addEventListener("click", stickfunc);
function stickfunc() {
  if (candy < 10000) {
    alert("キャンディが不足しています!");
  } else {
    stick_if = "true";
    stick.classList.add("bought");
    candy -= 10000;
    stick.removeEventListener("click", stickfunc);
  }
}

ecube.addEventListener("click", ecubefunc);

function ecubefunc() {
  if (candy < 50000) {
    alert("キャンディが不足しています!");
  } else if (stick_if == "false") {
    alert("先にキャンディスティックを取得してください!");
  } else {
    ecube_if = "true";
    ecube.classList.add("bought");
    candy -= 50000;
    ecube.removeEventListener("click", ecubefunc);
    setInterval(collectioneffect, 10000);
  }
}

wand.addEventListener("click", wandfunc); 
function wandfunc() {
  if (candy < 60000) {
    alert("キャンディが不足しています!");
  } else if (ecube_if == "false") {
    alert("先にエナジーキューブを取得してください!");
  } else if (sword_if == "pretrue") {
    alert("キャンディワンドとキャンディソードはどちらかしか選択できません!");
  } else if (lastsword_if == "true" || ecube_if == "true") {
    wand_if = "pretrue";
    wand.classList.add("bought");
    candy -= 60000;
    wand.removeEventListener("click", wandfunc);
    setInterval(collectioneffect, 10000);
  }
}

dcwand.addEventListener("click", dcwandfunc);
function dcwandfunc() {
  if (candy < 110000) {
    alert("キャンディが不足しています!");
  } else if (wand_if == "false") {
    alert("先にキャンディワンドを取得してください!");
  } else {
    dcwand_if = "true";
    dcwand.classList.add("bought");
    candy -= 110000;
    dcwand.removeEventListener("click", dcwandfunc);
    setInterval(collectioneffect, 5000);
  }
}

bwand.addEventListener("click", bwandfunc);
function bwandfunc() {
  if (candy < 180000) {
    alert("キャンディが不足しています!");
  } else if (dcwand_if == "false") {
    alert("先にダブルキューブ・キャンディワンドを取得してください!");
  } else {
    bwand_if = "true";
    bwand.classList.add("bought");
    candy -= 180000;
    bwand.removeEventListener("click", bwandfunc);
    setInterval(collectioneffect, 3333);
  }
}

twand.addEventListener("click", twandfunc);
function twandfunc() {
  if (candy < 260000) {
    alert("キャンディが不足しています!");
  } else if (bwand_if == "false") {
    alert("先にダブルキューブ・キャンディワンドを取得してください!");
  } else {
    twand_if = "true";
    twand.classList.add("bought");
    candy -= 260000;
    twand.removeEventListener("click", twandfunc);
    setInterval(collectioneffect, 2500);
  }
}

lastwand.addEventListener("click", lastwandfunc);
function lastwandfunc() {
  if (candy < 660000) {
    alert("キャンディが不足しています!");
  } else if (twand_if == "false") {
    alert("先に超絶キャンディワンド改・ターボを取得してください!");
  } else {
    wand_if = "true"
    lastwand_if = "true";
    lastwand.classList.add("bought");
    candy -= 660000;
    lastwand.removeEventListener("click", lastwandfunc);
    setInterval(collectioneffect, 1250);
  }
}

sword.addEventListener("click", swordfunc);
function swordfunc() {
  if (candy < 60000) {
    alert("キャンディが不足しています!");
  } else if (ecube_if == "false") {
    alert("先にエナジーキューブを取得してください!");
  } else if (wand_if == "pretrue") {
    alert("キャンディワンドとキャンディソードはどちらかしか選択できません!");
  } else if (lastwand_if == "true" || ecube_if == "true") {
    sword_if = "pretrue";
    sword.classList.add("bought");
    candy -= 60000;
    sword.removeEventListener("click", swordfunc);
    setInterval(collectioneffect, 10000);
  }
}

dsword.addEventListener("click", dswordfunc);
function dswordfunc() {
  if (candy < 120000) {
    alert("キャンディが不足しています!");
  } else if (sword_if == "false") {
    alert("先にキャンディソードを取得してください!");
  } else {
    dsword_if = "true";
    dsword.classList.add("bought");
    candy -= 120000;
    dsword.removeEventListener("click", dswordfunc);
    setInterval(collectioneffect, 5000);
  }
}

tsword.addEventListener("click", tswordfunc);
function tswordfunc() {
  if (candy < 220000) {
    alert("キャンディが不足しています!");
  } else if (dsword_if == "false") {
    alert("先にデュアル・キャンディソードを取得してください!");
  } else {
    tsword_if = "true";
    tsword.classList.add("bought");
    candy -= 220000;
    tsword.removeEventListener("click", tswordfunc);
    setInterval(collectioneffect, 2500);
  }
}

lastsword.addEventListener("click", lastswordfunc);
function lastswordfunc() {
  if (candy < 860000) {
    alert("キャンディが不足しています!");
  } else if (tsword_if == "false") {
    alert("先に超絶キャンディソード改・ターボを取得してください!");
  } else {
    sword_if = "true";
    lastsword_if = "true";
    lastsword.classList.add("bought");
    candy -= 860000;
    lastsword.removeEventListener("click", lastswordfunc);
    setInterval(collectioneffect, 625);
  }
}