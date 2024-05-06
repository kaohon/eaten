let collection = document.getElementById("collection");
let stats = document.getElementById("stats");
let setting = document.getElementById("setting");
let cards = document.getElementById("cards");
let bank = document.getElementById("bank");
let items = document.getElementById("items");
let pass = document.getElementById("pass");
let rank = document.getElementById("rank");

let collection_open = document.getElementById("collection_open");
let stats_open = document.getElementById("stats_open");
let setting_open = document.getElementById("setting_open");
let cards_open = document.getElementById("cards_open");
let bank_open = document.getElementById("bank_open");
let items_open = document.getElementById("items_open");
let pass_open = document.getElementById("pass_open");
let rank_open = document.getElementById("rank_open");

const audio = new Audio('audio/button.mp3');

const headerElements = document.querySelectorAll("#collection, #stats, #setting, #cards, #bank, #items, #pass, #rank");
const menuButtons = document.querySelectorAll(".category");

let currentIndex = 0; // 現在のインデックスを記憶する変数
let lastButtonPressTime = 0; // 最後にボタンが押された時刻を記憶する変数
const buttonDelay = 500; // ボタンのディレイ（ミリ秒）

// ゲームパッドの状態を監視する関数
function checkGamepad() {
  const gamepad = navigator.getGamepads()[0];
  if (gamepad) {
    const currentTime = Date.now();
    if (gamepad.buttons[5].pressed && currentTime - lastButtonPressTime > buttonDelay) { // Aボタンが押されてディレイを経過したかどうかをチェック
      // Aボタンが押された場合の処理を記述
      menuButtons[currentIndex].click(); // 現在のインデックスのボタンをクリックする
      currentIndex = (currentIndex + 1) % menuButtons.length; // インデックスを更新する
      lastButtonPressTime = currentTime; // 最後にボタンが押された時刻を更新
    } else if (gamepad.buttons[4].pressed && currentTime - lastButtonPressTime > buttonDelay) { // Bボタンが押されてディレイを経過したかどうかをチェック
      // Bボタンが押された場合の処理を記述
      currentIndex = (currentIndex - 1 + menuButtons.length) % menuButtons.length; // インデックスをデクリメントする
      menuButtons[currentIndex].click(); // デクリメントされたインデックスのボタンをクリックする
      lastButtonPressTime = currentTime; // 最後にボタンが押された時刻を更新
    }
  }
}

// 定期的にゲームパッドの状態を確認するためのループを設定
setInterval(checkGamepad, 100); // 100ミリ秒ごとに確認

// メニューボタンのクリックイベントを設定
menuButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    headerElements.forEach(element => {
      element.style.display = "none";
    });
    const targetId = button.dataset.target;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.style.display = "block";
      audio.currentTime = 0;
      audio.play();
    }
    currentIndex = index; // 現在のインデックスを更新
  });
});

  stats_open.addEventListener("click", function () {
    headerElements.forEach(element => {
      element.style.display = "none";
    });
    stats.style.display = "block";
    audio.currentTime = 0;
    audio.play();
  });

  collection_open.addEventListener("click", function () {
    headerElements.forEach(element => {
      element.style.display = "none";
    });
    collection.style.display = "block";
    audio.currentTime = 0;
    audio.play();
  });

  setting_open.addEventListener("click", function () {
    headerElements.forEach(element => {
      element.style.display = "none";
    });
    setting.style.display = "block";
    audio.currentTime = 0;
    audio.play();
  });

  cards_open.addEventListener("click", function () {
    headerElements.forEach(element => {
        element.style.display = "none";
    });
    cards.style.display = "block";
    audio.currentTime = 0;
    audio.play();
  });

  bank_open.addEventListener("click", function () {
    headerElements.forEach(element => {
        element.style.display = "none";
    });
    bank.style.display = "block";
    audio.currentTime = 0;
    audio.play();
  });

  items_open.addEventListener("click", function () {
    headerElements.forEach(element => {
        element.style.display = "none";
    });
    items.style.display = "block";
    audio.currentTime = 0;
    audio.play();
  });

  pass_open.addEventListener("click", function () {
    headerElements.forEach(element => {
        element.style.display = "none";
    });
    pass.style.display = "block";
    audio.currentTime = 0;
    audio.play();
  });

  rank_open.addEventListener("click", function () {
    headerElements.forEach(element => {
      element.style.display = "none";
  });
    rank.style.display = "block";
    audio.currentTime = 0;
    audio.play();
  });

const mediaQuery = window.matchMedia('(max-width:1360px)');
const headerElementsopen = document.querySelectorAll("#items_open, #collection_open, #setting_open, #stats_open, #cards_open, #bank_open, #pass_open, #rank_open");

if (mediaQuery.matches) {
  candy.addEventListener("click", function () {
    if (items_open.style.display == "none"){
      headerElementsopen.forEach(element => {
        element.style.display = "block";
      });
      headerElements.forEach(element => {
        element.style.display = "none";
      });
    } else {
      headerElementsopen.forEach(element => {
        element.style.display = "none";
      });
    }
    audio.currentTime = 0;
    audio.play();
  });

  items_open.addEventListener("click", function () {
    headerElementsopen.forEach(element => {
      element.style.display = "none";
    });
  });

  collection_open.addEventListener("click", function () {
    headerElementsopen.forEach(element => {
      element.style.display = "none";
    });
  });

  setting_open.addEventListener("click", function () {
    headerElementsopen.forEach(element => {
      element.style.display = "none";
    });
  });

  stats_open.addEventListener("click", function () {
    headerElementsopen.forEach(element => {
      element.style.display = "none";
    });
  });

  cards_open.addEventListener("click", function () {
    headerElementsopen.forEach(element => {
      element.style.display = "none";
    });
  });

  bank_open.addEventListener("click", function () {
    headerElementsopen.forEach(element => {
      element.style.display = "none";
    });
  });

  pass_open.addEventListener("click", function () {
    headerElementsopen.forEach(element => {
      element.style.display = "none";
    });
  });

  rank_open.addEventListener("click", function () {
    headerElementsopen.forEach(element => {
      element.style.display = "none";
    });
  });
}

const stats_detail = document.querySelectorAll("#s_level, #s_playtime, #s_playtime_s1, #s_playtime_s2, #s_allcandy, #s_allcandy_s1, #s_allcandy_s2, #s_cps, #s_now_rank, #s_rank_s1, #s_rank_s2");

function toggleDisplay(elementsToShow) {
  stats_detail.forEach(element => {
    if (elementsToShow.includes(element)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

all_s_open.addEventListener("click", function () {
  toggleDisplay([s_level, s_playtime, s_playtime_s1, s_playtime_s2, s_allcandy, s_allcandy_s1, s_allcandy_s2, s_cps, s_now_rank, s_rank_s1, s_rank_s2]);
});

total_s_open.addEventListener("click", function () {
  toggleDisplay([s_level, s_playtime, s_allcandy, s_cps, s_now_rank]);
});

playtime_s_open.addEventListener("click", function () {
  toggleDisplay([s_playtime, s_playtime_s1, s_playtime_s2]);
});

candy_s_open.addEventListener("click", function () {
  toggleDisplay([s_allcandy, s_allcandy_s1, s_allcandy_s2]);
});

rank_s_open.addEventListener("click", function () {
  toggleDisplay([s_now_rank, s_rank_s1, s_rank_s2]);
});

s1_s_open.addEventListener("click", function () {
  toggleDisplay([s_playtime_s1, s_allcandy_s1, s_rank_s1]);
});

s2_s_open.addEventListener("click", function () {
  toggleDisplay([s_playtime_s2, s_allcandy_s2, s_rank_s2]);
});

/*
const achivement_detail = document.querySelectorAll("#ct_01_complete, #ct_02_complete, #reach_b, #reach_s, #reach_g, #reach_p, #reach_d, #reach_m, #reach_b_s1, #reach_s_s1, #reach_g_s1, #reach_p_s1, #reach_d_s1, #reach_m_s1,#reach_b_s2, #reach_s_s2, #reach_g_s2, #reach_p_s2, #reach_d_s2, #reach_m_s2,#l50, #l100, #l150, #l200, #l250, #l300, #l350, #l400, #l450, #l500, #s1_play, #s1_complete, #s2_play, #s2_complete");

all_a_open.addEventListener("click", function () {
  achivement_detail.forEach(element => {
      element.style.display = "block";
  });
});

ct_a_open.addEventListener("click", function () {
  achivement_detail.forEach(element => {
      element.style.display = "none";
      ct_01_complete.style.display = "block";
      ct_02_complete.style.display = "block";
  });
});
*/

/*
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

setInterval(function() {
  // 検証ツールを開発者向けコンソールを開いているかどうかを確認
    if (window.outerWidth - window.innerWidth > 150 || window.outerHeight - window.innerHeight > 150) {
      console.error('!!!!!✖✖データの改ざん✖✖!!!!!');
      window.location.href = "https://www.google.com/";
      rank.style.display = "none";
      rank_open.style.display = "none";
      items.style.display = "none";
      items_open.style.display = "none";
      collection.style.display = "none";
      collection_open.style.display = "none";
      setting.style.display = "none";
      setting_open.style.display = "none";
      stats.style.display = "none";
      stats_open.style.display = "none";
      cards.style.display = "none";
      cards_open.style.display = "none";
      bank.style.display = "none";
      bank_open.style.display = "none";
      pass.style.display = "none";
      pass_open.style.display = "none";
    }
  }, 500); // 1秒ごとにチェック
  */

let ct_01_open = document.getElementById("ct_01_open");
let ct_02_open = document.getElementById("ct_02_open");

let ct_01 = document.getElementById("ct_01");
let ct_02 = document.getElementById("ct_02");

  ct_01_open.addEventListener("click", function () {
    ct_01.style.display = "block";
    ct_02.style.display = "none";
    audio.currentTime = 0;
    audio.play();
  });

  ct_02_open.addEventListener("click", function () {
    ct_02.style.display = "block";
    ct_01.style.display = "none";
    audio.currentTime = 0;
    audio.play();
  });

  let lineshare = document.getElementById("lineshare");

  lineshare.addEventListener("click", function () {
    window.location.href =
    "https://line.me/R/msg/text/現在のキャンディ生産数: " + candy + " キャンディ"
    + "%0a現在のプレイ時間: " + counthour + " 時間 " + countmin + " 分 " + countsec + " 秒 "
    + "%0a現在のレベル: " + levelhtml.innerHTML + " / 500"
    + "%0a現在のランク: " + "Circuit " + circuit.innerHTML + " " + now_rank.innerHTML;
    audio.currentTime = 0;
    audio.play();
  });