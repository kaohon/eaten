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
    window.location.href = "https://line.me/R/msg/text/現在のキャンディ生産数: " + candy + " キャンディ" + "%0a現在のプレイ時間: " + counthour + " 時間 " + countmin + " 分 " + countsec + " 秒 ";
    audio.currentTime = 0;
    audio.play();
  });

  function take_arcana_1() {

  }