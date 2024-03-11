l0up = true;
l1up = false;
l2up = false;
l3up = false;
l4up = false;
l5up = false;
l6up = false;
l7up = false;
l8up = false;
l9up = false;
l10up = false;
l11up = false;
l12up = false;
l13up = false;
l14up = false;
l15up = false;
l16up = false;
l17up = false;
l18up = false;
l19up = false;
l20up = false;
l21up = false;
l22up = false;
l23up = false;
l24up = false;
l25up = false;
l26up = false;
l27up = false;
l28up = false;
l29up = false;
l30up = false;

/*
premium_buy.addEventListener("click", premium_buy_func);
function premium_buy_func() {
  if (candy < 100000) {
    alert("キャンディが不足しています!");
  } else {
    premium = true;
  }
}
*/

const passlv = () => {
  if (counthour >= 10) {
    l1.classList.add("lup");
    l1up = true;
  }
  if (counthour >= 20) {
    l2.classList.add("lup");
    l2up = true;
  }
  if (counthour >= 30) {
    l3.classList.add("lup");
    l3up = true;
  }
  if (counthour >= 40) {
    l4.classList.add("lup");
    l4up = true;
  }
  if (counthour >= 50) {
    l5.classList.add("lup");
    l5up = true;
  }
  if (counthour >= 60) {
    l6.classList.add("lup");
    l6up = true;
  }
  if (counthour >= 70) {
    l7.classList.add("lup");
    l7up = true;
  }
  if (counthour >= 80) {
    l8.classList.add("lup");
    l8up = true;
  }
  if (counthour >= 90) {
    l9.classList.add("lup");
    l9up = true;
  }
  if (counthour >= 100) {
    l10.classList.add("lup");
    l10up = true;
  }
  if (counthour >= 110) {
    l11.classList.add("lup");
    l11up = true;
  }
  if (counthour >= 120) {
    l12.classList.add("lup");
    l12up = true;
  }
  if (counthour >= 130) {
    l13.classList.add("lup");
    l13up = true;
  }
  if (counthour >= 140) {
    l14.classList.add("lup");
    l14up = true;
  }
  if (counthour >= 150) {
    l15.classList.add("lup");
    l15up = true;
  }
  if (counthour >= 160) {
    l16.classList.add("lup");
    l16up = true;
  }
  if (counthour >= 170) {
    l17.classList.add("lup");
    l17up = true;
  }
  if (counthour >= 180) {
    l18.classList.add("lup");
    l18up = true;
  }
  if (counthour >= 190) {
    l19.classList.add("lup");
    l19up = true;
  }
  if (counthour >= 200) {
    l20.classList.add("lup");
    l20up = true;
  }
  if (counthour >= 210) {
    l21.classList.add("lup");
    l21up = true;
  }
  if (counthour >= 220) {
    l22.classList.add("lup");
    l22up = true;
  }
  if (counthour >= 230) {
    l23.classList.add("lup");
    l23up = true;
  }
  if (counthour >= 240) {
    l24.classList.add("lup");
    l24up = true;
  }
  if (counthour >= 250) {
    l25.classList.add("lup");
    l25up = true;
  }
  if (counthour >= 260) {
    l26.classList.add("lup");
    l26up = true;
  }
  if (counthour >= 270) {
    l27.classList.add("lup");
    l27up = true;
  }
  if (counthour >= 280) {
    l28.classList.add("lup");
    l28up = true;
  }
  if (counthour >= 290) {
    l29.classList.add("lup");
    l29up = true;
  }
  if (counthour >= 300) {
    l30.classList.add("lup");
    l30up = true;
  }
}
setInterval(passlv, 1000);

counthour = elapsedhour.innerHTML;

  if (l0up === true) {
  l0.addEventListener("click", l0func);
  function l0func() {
      s1_play.style.display = "block";
      l0reward = true;
  l0.removeEventListener("click", l0func);
  }
}

if (counthour >= 50) {
  l5.addEventListener("click", l5func);
  function l5func() {
      candy += 750;
      l5reward = true;
  l5.removeEventListener("click", l5func);
  }
}

if (counthour >= 100) {
  l10.addEventListener("click", l10func);
  function l10func() {
      candy += 1000;
      l10reward = true;
  l10.removeEventListener("click", l10func);
  }
}

if (counthour >= 150) {
  l15.addEventListener("click", l15func);
  function l15func() {
      candy += 1250;
      l15reward = true;
  l15.removeEventListener("click", l15func);
  }
}

if (counthour >= 200) {
  l20.addEventListener("click", l20func);
  function l20func() {
      candy += 1500;
      l20reward = true;
  l20.removeEventListener("click", l20func);
  }
}

if (counthour >= 250) {
  l25.addEventListener("click", l25func);
  function l25func() {
      candy += 1750;
      l25reward = true;
  l25.removeEventListener("click", l25func);
  }
}

if (counthour >= 300) {
  l30.addEventListener("click", l30func);
  function l30func() {
      candy += 3000;
      s1_complete.style.display = "block";
      l30reward = true;
      l30.removeEventListener("click", l30func);
  }
}

/*
if (premium === true) {
  l30.addEventListener("click", preml30);
  function preml30() {
    // プレミアムボーナスの処理
  }
}
*/