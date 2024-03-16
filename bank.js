// HTML要素の取得
var in_storage = document.getElementById("in_storage");
var out_storage = document.getElementById("out_storage");
var candy_storage = document.getElementById("candy_storage");

// 入金ボタンのクリックイベントリスナー
in_storage.addEventListener("click", function () {
    var invalue = parseInt(prompt("預金額を入力してください"));
    if (isNaN(invalue) || invalue <= 0) {
        alert("預金額は正の数値で入力してください。");
    } else if (candy < invalue) {
        alert("預金額は所持キャンディー数よりも少なくしてください。");
    } else {
        candy -= invalue;
        var old_invalue = parseInt(candy_storage.innerHTML);
        let new_invalue = invalue + old_invalue;
        candy_storage.innerHTML = new_invalue;
        localStorage.setItem("candyvalue", candy);
        localStorage.setItem("storagevalue", new_invalue);
    }
});

// 出金ボタンのクリックイベントリスナー
out_storage.addEventListener("click", function () {
    var outvalue = parseInt(prompt("出金額を入力してください"));
    var invalue = parseInt(candy_storage.innerHTML);
    if (isNaN(outvalue) || outvalue <= 0) {
        alert("出金額は正の数値で入力してください。");
    } else if (invalue < outvalue) {
        alert("出金額は預金キャンディー数よりも少なくしてください。");
    } else {
        candy += outvalue;
        let new_invalue = invalue - outvalue;
        candy_storage.innerHTML = new_invalue;
        localStorage.setItem("candyvalue", candy);
        localStorage.setItem("storagevalue", new_invalue);
    }
});

  if (candy_storage.innerHTML >= "10000") {
    bank_level.value = 1;
    progress_word.innerHTML = "レベル進行度:" + bank_level.value + "/7";
  }
  if (candy_storage.innerHTML >= "100000") {
    bank_level.value = 2;
    progress_word.innerHTML = "レベル進行度:" + bank_level.value + "/7";
  }
  if (candy_storage.innerHTML >= "1000000") {
    bank_level.value = 3;
    progress_word.innerHTML = "レベル進行度:" + bank_level.value + "/7";
  }
  if (candy_storage.innerHTML >= "10000000") {
    bank_level.value = 4;
    progress_word.innerHTML = "レベル進行度:" + bank_level.value + "/7";
  }
  if (candy_storage.innerHTML >= "100000000") {
    bank_level.value = 5;
    progress_word.innerHTML = "レベル進行度:" + bank_level.value + "/7";
  }
  if (candy_storage.innerHTML >= "1000000000") {
    bank_level.value = 6;
    progress_word.innerHTML = "レベル進行度:" + bank_level.value + "/7";
  }
  if (candy_storage.innerHTML >= "10000000000") {
    bank_level.value = 7;
    progress_word.innerHTML = "レベル進行度:" + bank_level.value + "/7";
  }