audio = new Audio('audio/button.mp3');

const autosave = () => {
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
    localStorage.setItem("elapsedtime_s1", count_s1);
    localStorage.setItem("elapsedsec_s1", countsec_s1);
    localStorage.setItem("elapsedmin_s1", countmin_s1);
    localStorage.setItem("elapsedhour_s1", counthour_s1);
  }
  setInterval(autosave, 30000);

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
    localStorage.setItem("elapsedtime_s1", count_s1);
    localStorage.setItem("elapsedsec_s1", countsec_s1);
    localStorage.setItem("elapsedmin_s1", countmin_s1);
    localStorage.setItem("elapsedhour_s1", counthour_s1);

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
    var count_str_s1 = localStorage.getItem("elapsedtime_s1");
    var sec_str_s1 = localStorage.getItem("elapsedsec_s1");
    var min_str_s1 = localStorage.getItem("elapsedmin_s1");
    var hour_str_s1 = localStorage.getItem("elapsedhour_s1");
    candyhtml.innerHTML = candy_str;
    elapsedsec.innerHTML = sec_str;
    elapsedmin.innerHTML = min_str;
    elapsedhour.innerHTML = hour_str;
    elapsedsec_s1.innerHTML = sec_str_s1;
    elapsedmin_s1.innerHTML = min_str_s1;
    elapsedhour_s1.innerHTML = hour_str_s1;
    candy_storage.innerHTML = bank_str;
    count = count_str
    countsec = sec_str;
    countmin = min_str;
    counthour = hour_str;
    count_s1 = count_str_s1;
    sec_s1 = sec_str_s1;
    min_s1 = min_str_s1;
    hour_s1 = hour_str_s1;
    new_invalue = Number(bank_str);
    candy = Number(candy_str);
    if (stick_str === "true") {
      stick_if = true;
      stick.classList.add("bought");
      stick.removeEventListener("click", stickfunc);
    } else {

    }

    if (ecube_str === "true") {
      ecube_if = true;
      cps += 0.25;
      ecube.classList.add("bought");
      ecube.removeEventListener("click", ecubefunc);
    } else {

    }

    if (wand_str === "pretrue") {
      wand_if = "pretrue";
      cps += 0.25;
      wand.classList.add("bought");
      wand.removeEventListener("click", wandfunc)
    } else {

    }

    if (wand_str === "true") {
      wand_if = true;
      cps += 0.25;
      wand.classList.add("bought");
      wand.removeEventListener("click", wandfunc)
    } else {

    }

    if (dcwand_str === "true") {
      dcwand_if = true;
      cps += 0.5;
      dcwand.classList.add("bought");
      dcwand.removeEventListener("click", dcwandfunc);
    } else {

    }

    if (bwand_str === "true") {
      bwand_if = true;
      cps += 0.75;
      bwand.classList.add("bought");
      bwand.removeEventListener("click", bwandfunc);
    } else {

    }

    if (twand_str === "true") {
      twand_if = true;
      cps += 1.0;
      twand.classList.add("bought");
      twand.removeEventListener("click", twandfunc);
    } else {

    }

    if (lastwand_str === "true") {
        lastwand_if = true;
        cps += 2.0;
        lastwand.classList.add("bought");
        lastwand.removeEventListener("click", lastwandfunc);
      } else {

      }

    if (sword_str === "true") {
      sword_if = true;
      cps += 0.25;
      sword.classList.add("bought");
      sword.removeEventListener("click", swordfunc)
    } else {

    }

    if (sword_str === "pretrue") {
      sword_if = "pretrue";
      cps += 0.25;
      sword.classList.add("bought");
      sword.removeEventListener("click", swordfunc)
    } else {

    }

    if (dsword_str === "true") {
        dsword_if = true;
        cps += 0.5;
        dsword.classList.add("bought");
        dsword.removeEventListener("click", dswordfunc);
      } else {

      }

      if (tsword_str === "true") {
        tsword_if = true;
        cps += 1.0;
        tsword.classList.add("bought");
        tsword.removeEventListener("click", tswordfunc);
      } else {

      }

      if (lastsword_str === "true") {
        lastsword_if = true;
        cps += 4.0;
        lastsword.classList.add("bought");
        lastsword.removeEventListener("click", lastswordfunc);
      } else {

      }

      if (spear_str === "true") {
        spear_if = true;
        cps += 0.5;
        spear.classList.add("bought");
        spear.removeEventListener("click", spearfunc);
      } else {

      }

      if (bow_str === "true") {
        bow_if = true;
        cps += 0.5;
        bow.classList.add("bought");
        bow.removeEventListener("click", bowfunc);
      } else {

      }

      if (knife_str === "true") {
        knife_if = true;
        cps += 0.5;
        knife.classList.add("bought");
        knife.removeEventListener("click", knifefunc);
      } else {

      }

      if (feather_knife_str === "true") {
        feather_knife_if = true;
        cps += 1.0;
        ct_02_complete.style.display = "block";
        feather_knife.classList.add("bought");
        feather_knife.removeEventListener("click", feather_knifefunc);
      } else {

      }

      if (l0reward_str === "true") {
        l0reward = true;
        l0_reward_n.classList.add("acq");
        s1_play.style.display = "block";
      } else {

      }

      if (l5reward_str === "true") {
        l5reward = true;
        l5_reward_n.classList.add("acq");
      } else {

      }

      if (l10reward_str === "true") {
        l10reward = true;
        l10_reward_n.classList.add("acq");
      } else {

      }

      if (l15reward_str === "true") {
        l15reward = true;
        l15_reward_n.classList.add("acq");
      } else {

      }

      if (l20reward_str === "true") {
        l20reward = true;
        l20_reward_n.classList.add("acq");
      } else {

      }

      if (l25reward_str === "true") {
        l25reward = true;
        l25_reward_n.classList.add("acq");
      } else {

      }

      if (l30reward_str === "true") {
        l30reward = true;
        l30_reward_n.classList.add("acq");
        s1_complete.style.display = "block";
      } else {

      }

      if (premium_str === "true") {
        premium = true;
        l0_reward_sp.classList.add("lup");
        premium_buy.removeEventListener("click", premium_buy_func);
      } else {

      }

      if (ct_02_buy_str === "true") {
        ct_02_buy = true;
        ct_02_open.style.visibility = "visible";
        collection_tree_buy.removeEventListener("click", premium_buy_func);
      } else {

      }

      if (lastsword_str === "true" && lastwand_str === "true") {
        ct_02_open.style.visibility = "visible";
        ct_01_complete.style.display = "block";
      } else {

      }

      const mediaQuery = window.matchMedia('(max-width:1360px)')

      if (mediaQuery.matches) {
        if (lastsword_str === "true" && lastwand_str === "true") {
          ct_02_open.style.display = "flex";
          ct_01_complete.style.display = "block";
        } else {

        }

        if (ct_02_buy_str === "true") {
          ct_02_buy = true;
          ct_02_open.style.display = "flex";
          collection_tree_buy.removeEventListener("click", premium_buy_func);
        } else {

        }
      }

      if (candy_str !== null && !isNaN(candy_str)) {
        candy = Number(candy_str);
      } else {
      // Set candy to a default value (e.g., 0) if data is invalid
        candy = 0;
      }
  }

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
    localStorage.removeItem("elapsedtime_s1");
    localStorage.removeItem("elapsedsec_s1");
    localStorage.removeItem("elapsedmin_s1");
    localStorage.removeItem("elapsedhour_s1");

    audio.currentTime = 0;
    audio.play();
  }
// 暗号化キー
const encryptionKey = 'E6&mFz9x#s@Lq2Dv';

// テキストをAESで暗号化する関数
function encryptText(text) {
    const encryptedText = CryptoJS.AES.encrypt(text, encryptionKey).toString();
    return encryptedText;
}

// 暗号化されたテキストをAESで復号化する関数
function decryptText(encryptedText) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, encryptionKey);
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
}

function download() {
    const text = (`${candy}\n${count}\n${countsec}\n${countmin}\n${counthour}\n${new_invalue}\n${stick_if}\n${ecube_if}\n${wand_if}\n${dcwand_if}\n${bwand_if}\n${twand_if}\n${lastwand_if}\n${sword_if}\n${dsword_if}\n${tsword_if}\n${lastsword_if}\n${spear_if}\n${bow_if}\n${knife_if}\n${feather_knife_if}\n${l0reward}\n${l5reward}\n${l10reward}\n${l15reward}\n${l20reward}\n${l25reward}\n${l30reward}\n${premium}\n${ct_02_buy}\n${count_s1}\n${countsec_s1}\n${countmin_s1}\n${counthour_s1}`);
    // テキストデータをAESで暗号化
    var encryptedText = encryptText(text);

    // 暗号化されたテキストをBlobに変換してダウンロードリンクにセットする
    var blob = new Blob([encryptedText], { type: 'text/plain' });
    var url = window.URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'encrypted_data.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 音声再生
    audio.currentTime = 0;
    audio.play();
}

document.getElementById('selfile').addEventListener('change', function(evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();

    reader.onload = function() {
        // ファイルが読み込まれた後の処理
        var decryptedData = decryptText(reader.result).split('\n');
        console.log("復号化されたデータ:", decryptedData); // デバッグメッセージを追加

        // 各変数に値を設定する
        candy = decryptedData[0];
        count = decryptedData[1];
        countsec = decryptedData[2];
        countmin = decryptedData[3];
        counthour = decryptedData[4];
        new_invalue = decryptedData[5];
        stick_if = decryptedData[6];
        ecube_if = decryptedData[7];
        wand_if = decryptedData[8];
        dcwand_if = decryptedData[9];
        bwand_if = decryptedData[10];
        twand_if = decryptedData[11];
        lastwand_if = decryptedData[12];
        sword_if = decryptedData[13];
        dsword_if = decryptedData[14];
        tsword_if = decryptedData[15];
        lastsword_if = decryptedData[16];
        spear_if = decryptedData[17];
        bow_if = decryptedData[18];
        knife_if = decryptedData[19];
        feather_knife_if = decryptedData[20];
        l0reward = decryptedData[21];
        l5reward = decryptedData[22];
        l10reward = decryptedData[23];
        l15reward = decryptedData[24];
        l20reward = decryptedData[25];
        l25reward = decryptedData[26];
        l30reward = decryptedData[27];
        premium = decryptedData[28];
        ct_02_buy = decryptedData[29];
        count_s1 = decryptedData[30];
        countsec_s1 = decryptedData[31];
        countmin_s1 = decryptedData[32];
        counthour_s1 = decryptedData[33];
    };
    reader.readAsBinaryString(file);
}, false);