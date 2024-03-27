counthour = parseInt(elapsedhour.innerHTML);
levelhtml = document.getElementById("levelhtml");

const levelup = () => {
    const levels = [];
    for (let i = 1; i <= 500; i++) {
        levels.push({ hour: i * 10, now: `${i}` });
    }

    levels.forEach(level => {
        if (counthour >= level.hour) {
            levelhtml.innerHTML = level.now;
        }
    });

    if (counthour >= 500) {
      l50.style.display = "block";
    }

    if (counthour >= 1000) {
      l100.style.display = "block";
    }

    if (counthour >= 1500) {
      l150.style.display = "block";
    }

    if (counthour >= 2000) {
      l200.style.display = "block";
    }

    if (counthour >= 2500) {
      l250.style.display = "block";
    }

    if (counthour >= 3000) {
      l300.style.display = "block";
    }

    if (counthour >= 3500) {
      l350.style.display = "block";
    }

    if (counthour >= 4000) {
      l400.style.display = "block";
    }

    if (counthour >= 4500) {
      l450.style.display = "block";
    }

    if (counthour >= 5000) {
      l500.style.display = "block";
    }
}

setInterval(() => {
    counthour = parseInt(elapsedhour.innerHTML);
    levelup();
}, 1000);