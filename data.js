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
    localStorage.setItem("l0reward_s1", l0reward_s1);
    localStorage.setItem("l5reward_s1", l5reward_s1);
    localStorage.setItem("l10reward_s1", l10reward_s1);
    localStorage.setItem("l15reward_s1", l15reward_s1);
    localStorage.setItem("l20reward_s1", l20reward_s1);
    localStorage.setItem("l25reward_s1", l25reward_s1);
    localStorage.setItem("l30reward_s1", l30reward_s1);
    localStorage.setItem("premium", premium);
    localStorage.setItem("ct_02_buy", ct_02_buy);
    localStorage.setItem("elapsedtime_s1", count_s1);
    localStorage.setItem("elapsedsec_s1", countsec_s1);
    localStorage.setItem("elapsedmin_s1", countmin_s1);
    localStorage.setItem("elapsedhour_s1", counthour_s1);
    localStorage.setItem("elapsedtime_s2", count_s2);
    localStorage.setItem("elapsedsec_s2", countsec_s2);
    localStorage.setItem("elapsedmin_s2", countmin_s2);
    localStorage.setItem("elapsedhour_s2", counthour_s2);
    localStorage.setItem("allcandyvalue", allcandy);
    localStorage.setItem("allcandyvalue_s1", allcandy_s1);
    localStorage.setItem("allcandyvalue_s2", allcandy_s2);
    localStorage.setItem("l0reward_s2", l0reward_s2);
    localStorage.setItem("l5reward_s2", l5reward_s2);
    localStorage.setItem("l10reward_s2", l10reward_s2);
    localStorage.setItem("l15reward_s2", l15reward_s2);
    localStorage.setItem("l20reward_s2", l20reward_s2);
    localStorage.setItem("l25reward_s2", l25reward_s2);
    localStorage.setItem("l30reward_s2", l30reward_s2);
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
    localStorage.setItem("l0reward_s1", l0reward_s1);
    localStorage.setItem("l5reward_s1", l5reward_s1);
    localStorage.setItem("l10reward_s1", l10reward_s1);
    localStorage.setItem("l15reward_s1", l15reward_s1);
    localStorage.setItem("l20reward_s1", l20reward_s1);
    localStorage.setItem("l25reward_s1", l25reward_s1);
    localStorage.setItem("l30reward_s1", l30reward_s1);
    localStorage.setItem("premium", premium);
    localStorage.setItem("ct_02_buy", ct_02_buy);
    localStorage.setItem("elapsedtime_s1", count_s1);
    localStorage.setItem("elapsedsec_s1", countsec_s1);
    localStorage.setItem("elapsedmin_s1", countmin_s1);
    localStorage.setItem("elapsedhour_s1", counthour_s1);
    localStorage.setItem("elapsedtime_s2", count_s2);
    localStorage.setItem("elapsedsec_s2", countsec_s2);
    localStorage.setItem("elapsedmin_s2", countmin_s2);
    localStorage.setItem("elapsedhour_s2", counthour_s2);
    localStorage.setItem("allcandyvalue", allcandy);
    localStorage.setItem("allcandyvalue_s1", allcandy_s1);
    localStorage.setItem("allcandyvalue_s2", allcandy_s2);
    localStorage.setItem("l0reward_s2", l0reward_s2);
    localStorage.setItem("l5reward_s2", l5reward_s2);
    localStorage.setItem("l10reward_s2", l10reward_s2);
    localStorage.setItem("l15reward_s2", l15reward_s2);
    localStorage.setItem("l20reward_s2", l20reward_s2);
    localStorage.setItem("l25reward_s2", l25reward_s2);
    localStorage.setItem("l30reward_s2", l30reward_s2);

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
    var l0reward_s1_str = localStorage.getItem("l0reward_s1");
    var l5reward_s1_str = localStorage.getItem("l5reward_s1");
    var l10reward_s1_str = localStorage.getItem("l10reward_s1");
    var l15reward_s1_str = localStorage.getItem("l15reward_s1");
    var l20reward_s1_str = localStorage.getItem("l20reward_s1");
    var l25reward_s1_str = localStorage.getItem("l25reward_s1");
    var l30reward_s1_str = localStorage.getItem("l30reward_s1");
    var premium_str = localStorage.getItem("premium");
    var ct_02_buy_str = localStorage.getItem("ct_02_buy");
    var count_str_s1 = localStorage.getItem("elapsedtime_s1");
    var sec_str_s1 = localStorage.getItem("elapsedsec_s1");
    var min_str_s1 = localStorage.getItem("elapsedmin_s1");
    var hour_str_s1 = localStorage.getItem("elapsedhour_s1");
    var count_str_s2 = localStorage.getItem("elapsedtime_s2");
    var sec_str_s2 = localStorage.getItem("elapsedsec_s2");
    var min_str_s2 = localStorage.getItem("elapsedmin_s2");
    var hour_str_s2 = localStorage.getItem("elapsedhour_s2");
    var allcandy_str = localStorage.getItem("allcandyvalue");
    var allcandy_str_s1 = localStorage.getItem("allcandyvalue_s1");
    var allcandy_str_s2 = localStorage.getItem("allcandyvalue_s2");
    var l0reward_s2_str = localStorage.getItem("l0reward_s2");
    var l5reward_s2_str = localStorage.getItem("l5reward_s2");
    var l10reward_s2_str = localStorage.getItem("l10reward_s2");
    var l15reward_s2_str = localStorage.getItem("l15reward_s2");
    var l20reward_s2_str = localStorage.getItem("l20reward_s2");
    var l25reward_s2_str = localStorage.getItem("l25reward_s2");
    var l30reward_s2_str = localStorage.getItem("l30reward_s2");
    candyhtml.innerHTML = candy_str;
    elapsedsec.innerHTML = sec_str;
    elapsedmin.innerHTML = min_str;
    elapsedhour.innerHTML = hour_str;
    elapsedsec_s1.innerHTML = sec_str_s1;
    elapsedmin_s1.innerHTML = min_str_s1;
    elapsedhour_s1.innerHTML = hour_str_s1;
    candy_storage.innerHTML = bank_str;
    allcandyhtml.innerHTML = allcandy_str;
    allcandyhtml_s1.innerHTML = allcandy_str_s1;
    allcandyhtml_s2.innerHTML = allcandy_str_s2;
    count = count_str
    countsec = sec_str;
    countmin = min_str;
    counthour = hour_str;
    count_s1 = count_str_s1;
    sec_s1 = sec_str_s1;
    min_s1 = min_str_s1;
    hour_s1 = hour_str_s1;
    allcandy = allcandy_str;
    allcandy_s1 = allcandy_str_s1;
    allcandy_s2 = allcandy_str_s2;
    count_s2 = count_str_s2;
    sec_s2 = sec_str_s2;
    min_s2 = min_str_s2;
    hour_s2 = hour_str_s2;
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

      if (l0reward_s1_str === "true") {
        l0reward_s1 = true;
        s1_play.style.display = "block";
      } else {

      }

      if (l5reward_s1_str === "true") {
        l5reward_s1 = true;
      } else {

      }

      if (l10reward_s1_str === "true") {
        l10reward_s1 = true;
      } else {

      }

      if (l15reward_s1_str === "true") {
        l15reward_s1 = true;
      } else {

      }

      if (l20reward_s1_str === "true") {
        l20reward_s1 = true;
      } else {

      }

      if (l25reward_s1_str === "true") {
        l25reward_s1 = true;
      } else {

      }

      if (l30reward_s1_str === "true") {
        l30reward_s1 = true;
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

      if (l0reward_s2_str === "true") {
        l0reward_s2 = true;
        s2_play.style.display = "block";
        l0_reward_n.classList.add("acq");
      } else {

      }

      if (l5reward_s2_str === "true") {
        l5reward_s2 = true;
        l5_reward_n.classList.add("acq");
      } else {

      }

      if (l10reward_s2_str === "true") {
        l10reward_s2 = true;
        l10_reward_n.classList.add("acq");
      } else {

      }

      if (l15reward_s2_str === "true") {
        l15reward_s2 = true;
        l15_reward_n.classList.add("acq");
      } else {

      }

      if (l20reward_s2_str === "true") {
        l20reward_s2 = true;
        l20_reward_n.classList.add("acq");
      } else {

      }

      if (l25reward_s2_str === "true") {
        l25reward_s2 = true;
        l25_reward_n.classList.add("acq");
      } else {

      }

      if (l30reward_s2_str === "true") {
        l30reward_s2 = true;
        s2_complete.style.display = "block";
        l30_reward_n.classList.add("acq");
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

      if (allcandy_str_s1 !== null && !isNaN(allcandy_str_s1)) {
        allcandy_s1 = Number(allcandy_str_s1);
      } else {
      // Set candy to a default value (e.g., 0) if data is invalid
        allcandy_s1 = 0;
      }

      if (allcandy_str_s2 !== null && !isNaN(allcandy_str_s2)) {
        allcandy_s2 = Number(allcandy_str_s2);
      } else {
      // Set candy to a default value (e.g., 0) if data is invalid
        allcandy_s2 = 0;
      }

      if (count_str_s1 !== null && !isNaN(count_str_s1)) {
        count_s1 = Number(count_str_s1);
      } else {
      // Set candy to a default value (e.g., 0) if data is invalid
        count_s1 = 0;
      }

      if (count_str_s2 !== null && !isNaN(count_str_s2)) {
        count_s2 = Number(count_str_s2);
      } else {
      // Set candy to a default value (e.g., 0) if data is invalid
        count_s2 = 0;
      }
  }

  function reset() {
    if (window.confirm("本当にデータを消去したいですか?")) {
      if (window.confirm("本当に本当にデータを消去したいですか??????")) {
        let sign = prompt("消去したい場合は、 ALLCLEAR と入力してください。");
        if (sign === "ALLCLEAR") {
          alert("再読み込みすると、完全にデータが削除されます。引き返したい場合は、今の状態でデータの書き出し/セーブを行ってください。")
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
    localStorage.removeItem("l0reward_s1");
    localStorage.removeItem("l5reward_s1");
    localStorage.removeItem("l10reward_s1");
    localStorage.removeItem("l15reward_s1");
    localStorage.removeItem("l20reward_s1");
    localStorage.removeItem("l25reward_s1");
    localStorage.removeItem("l30reward_s1");
    localStorage.removeItem("premium");
    localStorage.removeItem("ct_02_buy");
    localStorage.removeItem("elapsedtime_s1");
    localStorage.removeItem("elapsedsec_s1");
    localStorage.removeItem("elapsedmin_s1");
    localStorage.removeItem("elapsedhour_s1");
    localStorage.removeItem("elapsedtime_s2");
    localStorage.removeItem("elapsedsec_s2");
    localStorage.removeItem("elapsedmin_s2");
    localStorage.removeItem("elapsedhour_s2");
    localStorage.removeItem("allcandyvalue");
    localStorage.removeItem("allcandyvalue_s1");
    localStorage.removeItem("allcandyvalue_s2");
    localStorage.removeItem("l0reward_s2");
    localStorage.removeItem("l5reward_s2");
    localStorage.removeItem("l10reward_s2");
    localStorage.removeItem("l15reward_s2");
    localStorage.removeItem("l20reward_s2");
    localStorage.removeItem("l25reward_s2");
    localStorage.removeItem("l30reward_s2");

    audio.currentTime = 0;
    audio.play();
        }
      }
    }
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
    const text = (`${candy}\n${count}\n${countsec}\n${countmin}\n${counthour}\n${new_invalue}\n${stick_if}\n${ecube_if}\n${wand_if}\n${dcwand_if}\n${bwand_if}\n${twand_if}\n${lastwand_if}\n${sword_if}\n${dsword_if}\n${tsword_if}\n${lastsword_if}\n${spear_if}\n${bow_if}\n${knife_if}\n${feather_knife_if}\n${l0reward_s1}\n${l5reward_s1}\n${l10reward_s1}\n${l15reward_s1}\n${l20reward_s1}\n${l25reward_s1}\n${l30reward_s1}\n${premium}\n${ct_02_buy}\n${count_s1}\n${countsec_s1}\n${countmin_s1}\n${counthour_s1}\n${allcandy}\n${allcandy_s1}\n${allcandy_s2}\n${count_s2}\n${countsec_s2}\n${countmin_s2}\n${counthour_s2}\n${l0reward_s2}\n${l5reward_s2}\n${l10reward_s2}\n${l15reward_s2}\n${l20reward_s2}\n${l25reward_s2}\n${l30reward_s2}`);
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
        l0reward_s1 = decryptedData[21];
        l5reward_s1 = decryptedData[22];
        l10reward_s1 = decryptedData[23];
        l15reward_s1 = decryptedData[24];
        l20reward_s1 = decryptedData[25];
        l25reward_s1 = decryptedData[26];
        l30reward_s1 = decryptedData[27];
        premium = decryptedData[28];
        ct_02_buy = decryptedData[29];
        count_s1 = decryptedData[30];
        countsec_s1 = decryptedData[31];
        countmin_s1 = decryptedData[32];
        counthour_s1 = decryptedData[33];
        allcandy = decryptedData[34];
        allcandy_s1 = decryptedData[35];
        allcandy_s2 = decryptedData[36];
        count_s2 = decryptedData[37];
        countsec_s2 = decryptedData[38];
        countmin_s2 = decryptedData[39];
        counthour_s2 = decryptedData[40];
        l0reward_s2 = decryptedData[41];
        l5reward_s2 = decryptedData[42];
        l10reward_s2 = decryptedData[43];
        l15reward_s2 = decryptedData[44];
        l20reward_s2 = decryptedData[45];
        l25reward_s2 = decryptedData[46];
        l30reward_s2 = decryptedData[47];
    };
    reader.readAsBinaryString(file);
}, false);