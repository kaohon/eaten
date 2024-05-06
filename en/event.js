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

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

setInterval(function() {
  // 検証ツールを開発者向けコンソールを開いているかどうかを確認
    if (window.outerWidth - window.innerWidth > 150 || window.outerHeight - window.innerHeight > 150) {
      console.error('!!!!!✖✖DO NOT DATA FALSIFICATION✖✖!!!!!');
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
    "https://line.me/R/msg/text/Current number of candies produced: " + candy + " candies"
    + "%0aCurrent playing time: " + counthour + " Hour " + countmin + " Minutes " + countsec + " Seconds "
    + "%0aCurrent level: " + levelhtml.innerHTML + " / 500"
    + "%0aCurrent rank: " + "Circuit " + circuit.innerHTML + " " + now_rank.innerHTML;
    audio.currentTime = 0;
    audio.play();
  });