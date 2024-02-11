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
  
  eatcandy_button.addEventListener("click", function () {
    candy -= candy;
    eatcandyval = candy;
  });

  lineshare.addEventListener("click", function () {
    window.location.href="https://line.me/R/msg/text/〇〇カンパニーの現在のキャンディ生産数は: " + candy;
  });