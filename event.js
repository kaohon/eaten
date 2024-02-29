stats_open.addEventListener("click", function () {
    stats.style.display = "block";
    collection.style.display = "none";
    setting.style.display = "none";
    cards.style.display = "none";
    bank.style.display = "none";
    items.style.display = "none";
    pass.style.display = "none";
    eatcandy.style.display = "none";
  });
  
  collection_open.addEventListener("click", function () {
    collection.style.display = "block";
    stats.style.display = "none";
    setting.style.display = "none";
    cards.style.display = "none";
    bank.style.display = "none";
    items.style.display = "none";
    pass.style.display = "none";
    eatcandy.style.display = "none";
  });
  
  setting_open.addEventListener("click", function () {
    setting.style.display = "block";
    stats.style.display = "none";
    collection.style.display = "none";
    cards.style.display = "none";
    bank.style.display = "none";
    items.style.display = "none";
    pass.style.display = "none";
    eatcandy.style.display = "none";
  });
  
  cards_open.addEventListener("click", function () {
    cards.style.display = "block";
    stats.style.display = "none";
    collection.style.display = "none";
    setting.style.display = "none";
    bank.style.display = "none";
    items.style.display = "none";
    pass.style.display = "none";
    eatcandy.style.display = "none";
  });
  
  bank_open.addEventListener("click", function () {
    bank.style.display = "block";
    stats.style.display = "none";
    collection.style.display = "none";
    setting.style.display = "none";
    cards.style.display = "none";
    items.style.display = "none";
    pass.style.display = "none";
    eatcandy.style.display = "none";
  });

  items_open.addEventListener("click", function () {
    items.style.display = "block";
    stats.style.display = "none";
    collection.style.display = "none";
    setting.style.display = "none";
    bank.style.display = "none";
    cards.style.display = "none";
    pass.style.display = "none";
    eatcandy.style.display = "none";
  });

  pass_open.addEventListener("click", function () {
    pass.style.display = "block";
    stats.style.display = "none";
    collection.style.display = "none";
    setting.style.display = "none";
    cards.style.display = "none";
    bank.style.display = "none";
    items.style.display = "none";
    eatcandy.style.display = "none";
  });

  eatcandy_open.addEventListener("click", function () {
    eatcandy.style.display = "block";
    stats.style.display = "none";
    collection.style.display = "none";
    setting.style.display = "none";
    cards.style.display = "none";
    bank.style.display = "none";
    items.style.display = "none";
    pass.style.display = "none";
  });

  const mediaQuery = window.matchMedia('(max-width:1360px)')

if (mediaQuery.matches) {
  candy.addEventListener("click", function () {
    if (items_open.style.display == "none"){
      items_open.style.display = "block";
      collection_open.style.display = "block";
      setting_open.style.display = "block";
      stats_open.style.display = "block";
      cards_open.style.display = "block";
      bank_open.style.display = "block";
      pass_open.style.display = "block";
      stats.style.display = "none";
      collection.style.display = "none";
      setting.style.display = "none";
      cards.style.display = "none";
      bank.style.display = "none";
      items.style.display = "none";
      pass.style.display = "none";
    } else {
      items_open.style.display = "none";
      collection_open.style.display = "none";
      setting_open.style.display = "none";
      stats_open.style.display = "none";
      cards_open.style.display = "none";
      bank_open.style.display = "none";
      pass_open.style.display = "none";
    }
  });

  items_open.addEventListener("click", function () {
      items_open.style.display = "none";
      collection_open.style.display = "none";
      setting_open.style.display = "none";
      stats_open.style.display = "none";
      cards_open.style.display = "none";
      bank_open.style.display = "none";
      pass_open.style.display = "none";
  });

  collection_open.addEventListener("click", function () {
    items_open.style.display = "none";
    collection_open.style.display = "none";
    setting_open.style.display = "none";
    stats_open.style.display = "none";
    cards_open.style.display = "none";
    bank_open.style.display = "none";
    pass_open.style.display = "none";
  });

  setting_open.addEventListener("click", function () {
  items_open.style.display = "none";
  collection_open.style.display = "none";
  setting_open.style.display = "none";
  stats_open.style.display = "none";
  cards_open.style.display = "none";
  bank_open.style.display = "none";
  pass_open.style.display = "none";
  });

  stats_open.addEventListener("click", function () {
    items_open.style.display = "none";
    collection_open.style.display = "none";
    setting_open.style.display = "none";
    stats_open.style.display = "none";
    cards_open.style.display = "none";
    bank_open.style.display = "none";
    pass_open.style.display = "none";
  });

  cards_open.addEventListener("click", function () {
    items_open.style.display = "none";
    collection_open.style.display = "none";
    setting_open.style.display = "none";
    stats_open.style.display = "none";
    cards_open.style.display = "none";
    bank_open.style.display = "none";
    pass_open.style.display = "none";
  });

  bank_open.addEventListener("click", function () {
    items_open.style.display = "none";
    collection_open.style.display = "none";
    setting_open.style.display = "none";
    stats_open.style.display = "none";
    cards_open.style.display = "none";
    bank_open.style.display = "none";
    pass_open.style.display = "none";
  });

  pass_open.addEventListener("click", function () {
    items_open.style.display = "none";
    collection_open.style.display = "none";
    setting_open.style.display = "none";
    stats_open.style.display = "none";
    cards_open.style.display = "none";
    bank_open.style.display = "none";
    pass_open.style.display = "none";
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
  
  eatcandy_button.addEventListener("click", function () {
    candy -= candy;
    eatcandyval = candy;
  });

  lineshare.addEventListener("click", function () {
    window.location.href = "https://line.me/R/msg/text/Test01 現在のキャンディ生産数: " + candy + " キャンディ" + "%0a現在のプレイ時間: " + counthour + " 時間 " + countmin + " 分 " + countsec + " 秒 ";
  });