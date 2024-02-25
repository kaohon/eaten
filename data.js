var candyhtml = document.getElementById("candy");

const autosave = () => {
    localStorage.setItem("candyvalue", candy);
    localStorage.setItem("elapsedtime", count);
    localStorage.setItem("elapsedsec", countsec);
    localStorage.setItem("elapsedmin", countmin);
    localStorage.setItem("elapsedhour", counthour);
    localStorage.setItem("storagevalue", invalue);
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
  }
  setInterval(autosave, 30000);

  function save() {
    localStorage.setItem("candyvalue", candy);
    localStorage.setItem("elapsedtime", count);
    localStorage.setItem("elapsedsec", countsec);
    localStorage.setItem("elapsedmin", countmin);
    localStorage.setItem("elapsedhour", counthour);
    localStorage.setItem("storagevalue", invalue);
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
  }

  window.onload = function(){
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
    candyhtml.innerHTML = candy_str;
    elapsedsec.innerHTML = sec_str;
    elapsedmin.innerHTML = min_str;
    elapsedhour.innerHTML = hour_str;
    candy_storage.innerHTML = bank_str;
    invalue = bank_str;
    count = count_str;
    countsec = sec_str;
    countmin = min_str;
    counthour = hour_str;
    candy = candy_str;
    if (stick_str == "true") {
      stick_if = "true";
      stick.classList.add("bought");
      stick.removeEventListener("click", stickfunc);
    } else {

    }

    if (ecube_str == "true") {
      ecube_if = "true";
      ecube.classList.add("bought");
      ecube.removeEventListener("click", ecubefunc);
      setInterval(collectioneffect, 10000);
    } else {
      
    }

    if (wand_str == "pretrue") {
      wand_if = "pretrue";
      wand.classList.add("bought");
      wand.removeEventListener("click", wandfunc);
      setInterval(collectioneffect, 10000);
    } else {
      
    }

    if (wand_str == "true") {
      wand_if = "true";
      wand.classList.add("bought");
      wand.removeEventListener("click", wandfunc);
      setInterval(collectioneffect, 10000);
    } else {
      
    }

    if (dcwand_str == "true") {
      dcwand_if = "true";
      dcwand.classList.add("bought");
      dcwand.removeEventListener("click", dcwandfunc);
      setInterval(collectioneffect, 5000);
    } else {
      
    }

    if (bwand_str == "true") {
      bwand_if = "true";
      bwand.classList.add("bought");
      bwand.removeEventListener("click", bwandfunc);
      setInterval(collectioneffect, 3333);
    } else {
      
    }

    if (twand_str == "true") {
      twand_if = "true";
      twand.classList.add("bought");
      twand.removeEventListener("click", twandfunc);
      setInterval(collectioneffect, 2500);
    } else {
      
    }
    
    if (lastwand_str == "true") {
        lastwand_if = "true";
        lastwand.classList.add("bought");
        lastwand.removeEventListener("click", lastwandfunc);
        setInterval(collectioneffect, 1250);
      } else {
        
      }

    if (sword_str == "true") {
      sword_if = "true";
      sword.classList.add("bought");
      sword.removeEventListener("click", swordfunc);
      setInterval(collectioneffect, 10000);
    } else {
      
    }

    if (sword_str == "pretrue") {
      sword_if = "pretrue";
      sword.classList.add("bought");
      sword.removeEventListener("click", swordfunc);
      setInterval(collectioneffect, 10000);
    } else {
      
    }

    if (dsword_str == "true") {
        dsword_if = "true";
        dsword.classList.add("bought");
        dsword.removeEventListener("click", dswordfunc);
        setInterval(collectioneffect, 5000);
      } else {
        
      }

      if (tsword_str == "true") {
        tsword_if = "true";
        tsword.classList.add("bought");
        tsword.removeEventListener("click", tswordfunc);
        setInterval(collectioneffect, 2500);
      } else {
        
      }

      if (lastsword_str == "true") {
        lastsword_if = "true";
        lastsword.classList.add("bought");
        lastsword.removeEventListener("click", lastswordfunc);
        setInterval(collectioneffect, 625);
      } else {
        
      }
  }

  function download() {
  var blob = new Blob(
    [text],
    { "type": "text/plain" })
  var url = window.URL.createObjectURL(blob)
  document.getElementById('link1').href = url
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
          invalue = data.split(/\r\n|\r|\n/)[5]
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
        }
    }, false);
});