// HTML要素の取得
var in_storage = document.getElementById("in_storage");
var out_storage = document.getElementById("out_storage");
var candy_storage = document.getElementById("candy_storage");

// 入金ボタンのクリックイベントリスナー
in_storage.addEventListener("click", function () {
    var invalue = prompt("Enter the amount of the deposit.");
    if (isNaN(invalue) || invalue <= 0) {
        alert("The deposit amount must be entered as a positive number.");
    } else if (candy < invalue) {
        alert("The deposit amount should be less than the number of candies held.");
    } else {
        candy -= invalue;
        var old_invalue = candy_storage.innerHTML;
        let new_invalue = Number(invalue) + Number(old_invalue);
        candy_storage.innerHTML = new_invalue;
        localStorage.setItem("candyvalue", candy);
        localStorage.setItem("storagevalue", new_invalue);
    }
});

// 出金ボタンのクリックイベントリスナー
out_storage.addEventListener("click", function () {
    var outvalue = Number(prompt("Please enter the amount of the withdrawal."));
    var invalue = Number(candy_storage.innerHTML);
    if (isNaN(outvalue) || outvalue <= 0) {
        alert("The amount of the withdrawal must be entered as a positive number.");
    } else if (invalue < outvalue) {
        alert("The withdrawal amount should be less than the number of deposit candies.");
    } else {
        candy += outvalue;
        let new_invalue = invalue - outvalue;
        candy_storage.innerHTML = new_invalue;
        localStorage.setItem("candyvalue", candy);
        localStorage.setItem("storagevalue", new_invalue);
    }
});

  if (candy_storage >= 10000) {
    bank_level.value = 1;
    progress_word.innerHTML = "Level Progression:" + bank_level.value + "/7";
  }
  if (candy_storage >= 100000) {
    bank_level.value = 2;
    progress_word.innerHTML = "Level Progression:" + bank_level.value + "/7";
  }
  if (candy_storage >= 1000000) {
    bank_level.value = 3;
    progress_word.innerHTML = "Level Progression:" + bank_level.value + "/7";
  }
  if (candy_storage >= 10000000) {
    bank_level.value = 4;
    progress_word.innerHTML = "Level Progression:" + bank_level.value + "/7";
  }
  if (candy_storage >= 100000000) {
    bank_level.value = 5;
    progress_word.innerHTML = "Level Progression:" + bank_level.value + "/7";
  }
  if (candy_storage >= 1000000000) {
    bank_level.value = 6;
    progress_word.innerHTML = "Level Progression:" + bank_level.value + "/7";
  }
  if (candy_storage >= 10000000000) {
    bank_level.value = 7;
    progress_word.innerHTML = "Level Progression:" + bank_level.value + "/7";
  }