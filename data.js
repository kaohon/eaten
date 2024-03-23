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

  function download() {
  var blob = new Blob(
    [text],
    { "type": "text/plain" })
      document.getElementById('link1').href = window.URL.createObjectURL(blob)

    audio.currentTime = 0;
    audio.play();
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