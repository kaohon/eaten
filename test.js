// Node.jsの場合

// 必要なモジュールを読み込む
//const fs = require('fs');
//const { setInterval } = require('countup');

// 定期的にログを出力する関数
//function logCurrentDateTime() {
//    const currentDate = new Date();
//    fs.appendFileSync('log.txt', "現在の日時は: " + currentDate.toLocaleString() + '\n');
//}

// 1秒ごとにlogCurrentDateTime関数を実行
//const timer = setInterval(logCurrentDateTime, 1000);

// プロセスが終了したらタイマーを停止する
//process.on('SIGINT', () => {
//    clearInterval(timer);
//    console.log('ログ記録を停止しました。');
//});

/*

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

var new_invalue = document.getElementById("candy_storage");

const countUp = () => {
    text = btoa(`${new_invalue}`)
  }
  setInterval(countUp, 1000);

const autosave = () => {
    localStorage.setItem("storagevalue", new_invalue);
  }
  setInterval(autosave, 30000);

  function save() {
    localStorage.setItem("storagevalue", new_invalue);
  }

  window.onload = function() {
    var bank_str = localStorage.getItem("storagevalue");
    candy_storage.innerHTML = bank_str;
  }

    document.addEventListener("DOMContentLoaded", function() {
    var obj = document.getElementById("selfile");
    obj.addEventListener("change", function(evt) {
        var file = evt.target.files;
        var reader = new FileReader();

        // dataURL形式でファイルを読み込む
        reader.readAsDataURL(file[0]);

        // ファイルの読込が終了した時の処理
        reader.onload = function() {
          var base64Data = reader.result.split(';base64,')[1];
          var decodedData = atob(base64Data);
          data = atob(decodedData);
          // 2行目を取得する
          new_invalue = data.split(/\r\n|\r|\n/)[0]
        }
    }, false);
});

*/