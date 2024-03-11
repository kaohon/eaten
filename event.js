const headerElements = document.querySelectorAll("#collection, #stats, #setting, #cards, #bank, #items, #pass, #rank");

  stats_open.addEventListener("click", function () {
    headerElements.forEach(element => {
      element.style.display = "none";
    });
    stats.style.display = "block";
  });
  
  collection_open.addEventListener("click", function () {
    headerElements.forEach(element => {
      element.style.display = "none";
    });
    collection.style.display = "block";
  });
  
  setting_open.addEventListener("click", function () {
    headerElements.forEach(element => {
      element.style.display = "none";
    });
    setting.style.display = "block";
  });
  
  cards_open.addEventListener("click", function () {
    headerElements.forEach(element => {
        element.style.display = "none";
    });
    cards.style.display = "block";
  });
  
  bank_open.addEventListener("click", function () {
    headerElements.forEach(element => {
        element.style.display = "none";
    });
    bank.style.display = "block";
  });

  items_open.addEventListener("click", function () {
    headerElements.forEach(element => {
        element.style.display = "none";
    });
    items.style.display = "block";
  });

  pass_open.addEventListener("click", function () {
    headerElements.forEach(element => {
        element.style.display = "none";
    });
    pass.style.display = "block";
  });

  rank_open.addEventListener("click", function () {
    headerElements.forEach(element => {
      element.style.display = "none";
  });
    rank.style.display = "block";
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

  ct_01_open.addEventListener("click", function () {
    ct_01.style.display = "block";
    ct_02.style.display = "none";
    ct_demo.style.display = "none";
  });

  ct_02_open.addEventListener("click", function () {
    ct_02.style.display = "block";
    ct_01.style.display = "none";
    ct_demo.style.display = "none";
  });

  ct_demo_open.addEventListener("click", function () {
    ct_demo.style.display = "block";
    ct_02.style.display = "none";
    ct_01.style.display = "none";
  });

  lineshare.addEventListener("click", function () {
    window.location.href = "https://line.me/R/msg/text/現在のキャンディ生産数: " + candy + " キャンディ" + "%0a現在のプレイ時間: " + counthour + " 時間 " + countmin + " 分 " + countsec + " 秒 ";
  });