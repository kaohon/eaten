let l0up = true;
let l1up = false;
let l2up = false;
let l3up = false;
let l4up = false;
let l5up = false;
let l6up = false;
let l7up = false;
let l8up = false;
let l9up = false;
let l10up = false;
let l11up = false;
let l12up = false;
let l13up = false;
let l14up = false;
let l15up = false;
let l16up = false;
let l17up = false;
let l18up = false;
let l19up = false;
let l20up = false;
let l21up = false;
let l22up = false;
let l23up = false;
let l24up = false;
let l25up = false;
let l26up = false;
let l27up = false;
let l28up = false;
let l29up = false;
let l30up = false;

let l0 = document.getElementById("l0");
let l1 = document.getElementById("l1");
let l2 = document.getElementById("l2");
let l3 = document.getElementById("l3");
let l4 = document.getElementById("l4");
let l5 = document.getElementById("l5");
let l6 = document.getElementById("l6");
let l7 = document.getElementById("l7");
let l8 = document.getElementById("l8");
let l9 = document.getElementById("l9");
let l10 = document.getElementById("l10");
let l11 = document.getElementById("l11");
let l12 = document.getElementById("l12");
let l13 = document.getElementById("l13");
let l14 = document.getElementById("l14");
let l15 = document.getElementById("l15");
let l16 = document.getElementById("l16");
let l17 = document.getElementById("l17");
let l18 = document.getElementById("l18");
let l19 = document.getElementById("l19");
let l20 = document.getElementById("l20");
let l21 = document.getElementById("l21");
let l22 = document.getElementById("l22");
let l23 = document.getElementById("l23");
let l24 = document.getElementById("l24");
let l25 = document.getElementById("l25");
let l26 = document.getElementById("l26");
let l27 = document.getElementById("l27");
let l28 = document.getElementById("l28");
let l29 = document.getElementById("l29");
let l30 = document.getElementById("l30");

counthour = elapsedhour.innerHTML;

premium = false;


premium_buy.addEventListener("click", premium_buy_func);
function premium_buy_func() {
  if (candy < 100000) {
    alert("キャンディが不足しています!");
  } else {
    candy -= 100000;
    premium = true;
    l0_reward_sp.classList.add("lup");
    premium_buy.removeEventListener("click", premium_buy_func);
  }
}

const passlv = () => {
  if (counthour >= 10) {
    l1.classList.add("lup");
    l1_reward_n.classList.add("lup");
    l1up = true;
      if (premium === true) {
        l1_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 20) {
    l2.classList.add("lup");
    l2_reward_n.classList.add("lup");
    l2up = true;
      if (premium === true) {
        l2_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 30) {
    l3.classList.add("lup");
    l3_reward_n.classList.add("lup");
    l3up = true;
      if (premium === true) {
        l3_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 40) {
    l4.classList.add("lup");
    l4_reward_n.classList.add("lup");
    l4up = true;
      if (premium === true) {
        l4_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 50) {
    l5_reward_n.addEventListener("click", l5func);
    l5.classList.add("lup");
    l5_reward_n.classList.add("lup");
    l5up = true;
      if (premium === true) {
        l5_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 60) {
    l6.classList.add("lup");
    l6_reward_n.classList.add("lup");
    l6up = true;
      if (premium === true) {
        l6_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 70) {
    l7.classList.add("lup");
    l7_reward_n.classList.add("lup");
    l7up = true;
      if (premium === true) {
        l7_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 80) {
    l8.classList.add("lup");
    l8_reward_n.classList.add("lup");
    l8up = true;
      if (premium === true) {
        l8_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 90) {
    l9.classList.add("lup");
    l9_reward_n.classList.add("lup");
    l9up = true;
      if (premium === true) {
        l9_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 100) {
    l10_reward_n.addEventListener("click", l10func);
    l10.classList.add("lup");
    l10_reward_n.classList.add("lup");
    l10up = true;
      if (premium === true) {
        l10_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 110) {
    l11.classList.add("lup");
    l11_reward_n.classList.add("lup");
    l11up = true;
      if (premium === true) {
        l11_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 120) {
    l12.classList.add("lup");
    l12_reward_n.classList.add("lup");
    l12up = true;
      if (premium === true) {
        l12_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 130) {
    l13.classList.add("lup");
    l13_reward_n.classList.add("lup");
    l13up = true;
      if (premium === true) {
        l13_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 140) {
    l14.classList.add("lup");
    l14_reward_n.classList.add("lup");
    l14up = true;
      if (premium === true) {
        l14_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 150) {
    l15_reward_n.addEventListener("click", l15func);
    l15.classList.add("lup");
    l15_reward_n.classList.add("lup");
    l15up = true;
      if (premium === true) {
        l15_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 160) {
    l16.classList.add("lup");
    l16_reward_n.classList.add("lup");
    l16up = true;
      if (premium === true) {
        l16_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 170) {
    l17.classList.add("lup");
    l17_reward_n.classList.add("lup");
    l17up = true;
      if (premium === true) {
        l17_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 180) {
    l18.classList.add("lup");
    l18_reward_n.classList.add("lup");
    l18up = true;
      if (premium === true) {
        l18_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 190) {
    l19.classList.add("lup");
    l19_reward_n.classList.add("lup");
    l19up = true;
      if (premium === true) {
        l19_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 200) {
    l20_reward_n.addEventListener("click", l20func);
    l20.classList.add("lup");
    l20_reward_n.classList.add("lup");
    l20up = true;
      if (premium === true) {
        l20_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 210) {
    l21.classList.add("lup");
    l21_reward_n.classList.add("lup");
    l21up = true;
      if (premium === true) {
        l21_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 220) {
    l22.classList.add("lup");
    l22_reward_n.classList.add("lup");
    l22up = true;
      if (premium === true) {
        l22_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 230) {
    l23.classList.add("lup");
    l23_reward_n.classList.add("lup");
    l23up = true;
      if (premium === true) {
        l23_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 240) {
    l24.classList.add("lup");
    l24_reward_n.classList.add("lup");
    l24up = true;
      if (premium === true) {
        l24_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 250) {
    l25_reward_n.addEventListener("click", l25func);
    l25.classList.add("lup");
    l25_reward_n.classList.add("lup");
    l25up = true;
      if (premium === true) {
        l25_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 260) {
    l26.classList.add("lup");
    l26_reward_n.classList.add("lup");
    l26up = true;
      if (premium === true) {
        l26_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 270) {
    l27.classList.add("lup");
    l27_reward_n.classList.add("lup");
    l27up = true;
      if (premium === true) {
        l27_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 280) {
    l28.classList.add("lup");
    l28_reward_n.classList.add("lup");
    l28up = true;
      if (premium === true) {
        l28_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 290) {
    l29.classList.add("lup");
    l29_reward_n.classList.add("lup");
    l29up = true;
      if (premium === true) {
        l29_reward_sp.classList.add("lup");
      }
  }

  if (counthour >= 300) {
    l30_reward_n.addEventListener("click", l30func);
    l30.classList.add("lup");
    l30_reward_n.classList.add("lup");
    l30up = true;
      if (premium === true) {
        l30_reward_sp.classList.add("lup");
      }
  }
}
setInterval(passlv, 1000);

let l0reward = false;
let l5reward = false;
let l10reward = false;
let l15reward = false;
let l20reward = false;
let l25reward = false;
let l30reward = false;

  if (l0up === true) {
  l0_reward_n.addEventListener("click", l0func);
  function l0func() {
      s1_play.style.display = "block";
      l0reward = true;
      l0_reward_n.classList.add("acq");
  l0_reward_n.removeEventListener("click", l0func);
  }
}

const l5func = () => {
if (l5up && !l5reward) {
    candy += 750;
    l5reward = true;
    l5_reward_n.classList.add("acq");
  }
}

const l10func = () => {
if (l10up && !l10reward) {
    candy += 1000;
    l10reward = true;
    l10_reward_n.classList.add("acq");
  }
}

const l15func = () => {
if (l15up && !l15reward) {
    candy += 1250;
    l15reward = true;
    l15_reward_n.classList.add("acq");
  }
}

const l20func = () => {
if (l20up && !l20reward) {
    candy += 1500;
    l20reward = true;
    l20_reward_n.classList.add("acq");
  }
}

const l25func = () => {
if (l25up && !l25reward) {
    candy += 1750;
    l25reward = true;
    l25_reward_n.classList.add("acq");
  }
}

const l30func = () => {
if (l30up && !l30reward) {
    candy += 3000;
    s1_complete.style.display = "block";
    l30reward = true;
    l30_reward_n.classList.add("acq");
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