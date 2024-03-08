const levelUps = new Array(100).fill(false);

const lvup = () => {
  for (let i = 0; i < levelUps.length; i++) {
    const level = i + 1;
    const element = document.querySelector(`#l${level}`);
    if (counthour >= level * 10 && !levelUps[i]) {
      element.classList.add("lup");
      levelUps[i] = true;
    }
  }
};

setInterval(lvup, 1000);