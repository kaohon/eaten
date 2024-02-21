in_storage.addEventListener("click", function () {
    invalue = prompt("預金額を入力してください");
    if (candy < invalue) {
      alert("預金額は所持キャンディー数よりも少なくしてください。");
    } else if (0 > invalue) {
      alert("預金額は自然数にしてください。");
    } else {
      candy -= invalue;
      old_invalue = candy_storage.innerHTML;
      invalue += +old_invalue;
      candy_storage.innerHTML = invalue;
    }
  });
  
  out_storage.addEventListener("click", function () {
    outvalue = prompt("出金額を入力してください");
    if (invalue < outvalue) {
      alert("出金額は預金キャンディー数よりも少なくしてください。")
    } else if (0 > outvalue) {
      alert("出金額は自然数にしてください。");
    } else {
      localStorage.removeItem("storagevalue");
      candy += +outvalue;
      invalue = invalue - outvalue;
      candy_storage.innerHTML = invalue;
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