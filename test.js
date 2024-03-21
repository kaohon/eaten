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

var candyhtml = document.getElementById("candy");
var cpshtml = document.getElementById("cps");

let candy = 0;
let count = 0;
let cps = 1.0;

let counthour;
let countmin;
let countsec;

var new_invalue = document.getElementById("candy_storage");
let elapsedsec = document.getElementById("elapsedsec");
let elapsedmin = document.getElementById("elapsedmin");
let elapsedhour = document.getElementById("elapsedhour");

const countUp = () => {
    candy = parseInt(candy) + cps;
    console.log(count++);
    candyhtml.innerHTML = parseInt(candy) + " キャンディー";
    cpshtml.innerHTML = cps;

    counthour = Math.floor(count / 60 / 60);
    countmin = Math.floor(count / 60) - Math.floor(count / 60 / 60) * 60;
    countsec = count - (countmin * 60 + counthour * 60 * 60);

    document.getElementById("elapsedsec").innerHTML = countsec;
    elapsedmin.innerHTML = countmin;
    elapsedhour.innerHTML = counthour;
    circuit.innerHTML = 1 + parseInt(counthour / 510);
    text = btoa(`${candy}\n${count}\n${countsec}\n${countmin}\n${counthour}\n${new_invalue}\n${stick_if}\n${ecube_if}\n${wand_if}\n${dcwand_if}\n${bwand_if}\n${twand_if}\n${lastwand_if}\n${sword_if}\n${dsword_if}\n${tsword_if}\n${lastsword_if}\n${spear_if}\n${bow_if}\n${knife_if}\n${feather_knife_if}\n${l0reward}\n${l5reward}\n${l10reward}\n${l15reward}\n${l20reward}\n${l25reward}\n${l30reward}\n${premium}\n${ct_02_buy}`);
  }
  setInterval(countUp, 1000);

  function save() {
    localStorage.setItem("candyvalue", candy);
    localStorage.setItem("elapsedtime", count);
    localStorage.setItem("elapsedsec", countsec);
    localStorage.setItem("elapsedmin", countmin);
    localStorage.setItem("elapsedhour", counthour);
    localStorage.setItem("stick_if", stick_if);
    localStorage.setItem("ecube_if", ecube_if);
    localStorage.setItem("wand_if", wand_if);
    localStorage.setItem("dcwand_if", dcwand_if);
    localStorage.setItem("bwand_if", bwand_if);
    localStorage.setItem("twand_if", twand_if);
    localStorage.setItem("sword_if", sword_if);
    localStorage.setItem("lastwand_if", lastwand_if);
    localStorage.setItem("sword_if", sword_if);
    localStorage.setItem("dsword_if", dsword_if);
    localStorage.setItem("tsword_if", tsword_if);
    localStorage.setItem("lastsword_if", lastsword_if);
    localStorage.setItem("spear_if", spear_if);
    localStorage.setItem("bow_if", bow_if);
    localStorage.setItem("knife_if", knife_if);
    localStorage.setItem("feather_knife_if", feather_knife_if);
    localStorage.setItem("l0reward", l0reward);
    localStorage.setItem("l5reward", l5reward);
    localStorage.setItem("l10reward", l10reward);
    localStorage.setItem("l15reward", l15reward);
    localStorage.setItem("l20reward", l20reward);
    localStorage.setItem("l25reward", l25reward);
    localStorage.setItem("l30reward", l30reward);
    localStorage.setItem("premium", premium);
    localStorage.setItem("ct_02_buy", ct_02_buy);

    audio.currentTime = 0;
    audio.play();
  }

  window.onload = function() {
    var candy_str = localStorage.getItem("candyvalue");
    var count_str = localStorage.getItem("elapsedtime");
    var sec_str = localStorage.getItem("elapsedsec");
    var min_str = localStorage.getItem("elapsedmin");
    var hour_str = localStorage.getItem("elapsedhour");
    var bank_str = localStorage.getItem("storagevalue");
    var stick_str = localStorage.getItem("stick_if");
    var ecube_str = localStorage.getItem("ecube_if");
    var wand_str = localStorage.getItem("wand_if");
    var dcwand_str = localStorage.getItem("dcwand_if");
    var bwand_str = localStorage.getItem("bwand_if");
    var twand_str = localStorage.getItem("twand_if");
    var lastwand_str = localStorage.getItem("lastwand_if");
    var sword_str = localStorage.getItem("sword_if");
    var dsword_str = localStorage.getItem("dsword_if");
    var tsword_str = localStorage.getItem("tsword_if");
    var lastsword_str = localStorage.getItem("lastsword_if");
    var spear_str = localStorage.getItem("spear_if");
    var bow_str = localStorage.getItem("bow_if");
    var knife_str = localStorage.getItem("knife_if");
    var feather_knife_str = localStorage.getItem("feather_knife_if");
    var l0reward_str = localStorage.getItem("l0reward");
    var l5reward_str = localStorage.getItem("l5reward");
    var l10reward_str = localStorage.getItem("l10reward");
    var l15reward_str = localStorage.getItem("l15reward");
    var l20reward_str = localStorage.getItem("l20reward");
    var l25reward_str = localStorage.getItem("l25reward");
    var l30reward_str = localStorage.getItem("l30reward");
    var premium_str = localStorage.getItem("premium");
    var ct_02_buy_str = localStorage.getItem("ct_02_buy");
    candyhtml.innerHTML = candy_str;
    elapsedsec.innerHTML = sec_str;
    elapsedmin.innerHTML = min_str;
    elapsedhour.innerHTML = hour_str;
    candy_storage.innerHTML = bank_str;
    count = count_str
    countsec = sec_str;
    countmin = min_str;
    counthour = hour_str;
    candy = candy_str;

  function reset() {
    localStorage.removeItem("candyvalue");
    localStorage.removeItem("elapsedtime");
    localStorage.removeItem("elapsedsec");
    localStorage.removeItem("elapsedmin");
    localStorage.removeItem("elapsedhour");
    localStorage.removeItem("storagevalue");
    localStorage.removeItem("stick_if");
    localStorage.removeItem("ecube_if");
    localStorage.removeItem("wand_if");
    localStorage.removeItem("dcwand_if");
    localStorage.removeItem("bwand_if");
    localStorage.removeItem("twand_if");
    localStorage.removeItem("lastwand_if");
    localStorage.removeItem("sword_if");
    localStorage.removeItem("dsword_if");
    localStorage.removeItem("tsword_if");
    localStorage.removeItem("lastsword_if");
    localStorage.removeItem("spear_if");
    localStorage.removeItem("bow_if");
    localStorage.removeItem("knife_if");
    localStorage.removeItem("feather_knife_if");
    localStorage.removeItem("l0reward");
    localStorage.removeItem("l5reward");
    localStorage.removeItem("l10reward");
    localStorage.removeItem("l15reward");
    localStorage.removeItem("l20reward");
    localStorage.removeItem("l25reward");
    localStorage.removeItem("l30reward");
    localStorage.removeItem("premium");
    localStorage.removeItem("ct_02_buy");

    audio.currentTime = 0;
    audio.play();
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
          candy = data.split(/\r\n|\r|\n/)[0]
          count = data.split(/\r\n|\r|\n/)[1]
          countsec = data.split(/\r\n|\r|\n/)[2]
          countmin = data.split(/\r\n|\r|\n/)[3]
          counthour = data.split(/\r\n|\r|\n/)[4]
          new_invalue = data.split(/\r\n|\r|\n/)[5]
          stick_if = data.split(/\r\n|\r|\n/)[6]
          ecube_if = data.split(/\r\n|\r|\n/)[7]
          wand_if = data.split(/\r\n|\r|\n/)[8]
          dcwand_if = data.split(/\r\n|\r|\n/)[9]
          bwand_if = data.split(/\r\n|\r|\n/)[10]
          twand_if = data.split(/\r\n|\r|\n/)[11]
          lastwand_if = data.split(/\r\n|\r|\n/)[12]
          sword_if = data.split(/\r\n|\r|\n/)[13]
          dsword_if = data.split(/\r\n|\r|\n/)[14]
          tsword_if = data.split(/\r\n|\r|\n/)[15]
          lastsword_if = data.split(/\r\n|\r|\n/)[16]
          spear_if = data.split(/\r\n|\r|\n/)[17]
          bow_if = data.split(/\r\n|\r|\n/)[18]
          knife_if = data.split(/\r\n|\r|\n/)[19]
          feather_knife_if = data.split(/\r\n|\r|\n/)[20]
          l0reward = data.split(/\r\n|\r|\n/)[21]
          l5reward = data.split(/\r\n|\r|\n/)[22]
          l10reward = data.split(/\r\n|\r|\n/)[23]
          l15reward = data.split(/\r\n|\r|\n/)[24]
          l20reward = data.split(/\r\n|\r|\n/)[25]
          l25reward = data.split(/\r\n|\r|\n/)[26]
          l30reward = data.split(/\r\n|\r|\n/)[27]
          premium = data.split(/\r\n|\r|\n/)[28]
          ct_02_buy = data.split(/\r\n|\r|\n/)[29]
        }
    }, false);
});
