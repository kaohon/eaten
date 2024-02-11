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