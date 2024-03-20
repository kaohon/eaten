counthour = parseInt(elapsedhour.innerHTML);
rankhour = counthour % 510;

let b3 = document.getElementById("b3");
let b2 = document.getElementById("b2");
let b1 = document.getElementById("b1");
let s3 = document.getElementById("s3");
let s2 = document.getElementById("s2");
let s1 = document.getElementById("s1");
let g3 = document.getElementById("g3");
let g2 = document.getElementById("g2");
let g1 = document.getElementById("g1");
let p3 = document.getElementById("p3");
let p2 = document.getElementById("p2");
let p1 = document.getElementById("p1");
let d3 = document.getElementById("d3");
let d2 = document.getElementById("d2");
let d1 = document.getElementById("d1");
let m3 = document.getElementById("m3");
let m2 = document.getElementById("m2");
let m1 = document.getElementById("m1");

let reach_b = document.getElementById("reach_b");
let reach_s = document.getElementById("reach_s");
let reach_g = document.getElementById("reach_g");
let reach_p = document.getElementById("reach_p");
let reach_d = document.getElementById("reach_d");
let reach_m = document.getElementById("reach_m");

let now_rank = document.getElementById("now_rank");

const rankup = () => {
    const ranks = [
        { hour: 15, element: b3, displayElement: reach_b, now: "ブロンズ3" },
        { hour: 30, element: b2, now: "ブロンズ2" },
        { hour: 45, element: b1, now: "ブロンズ1" },
        { hour: 65, element: s3, displayElement: reach_s, now: "シルバー3" },
        { hour: 85, element: s2, now: "シルバー2" },
        { hour: 105, element: s1, now: "シルバー1" },
        { hour: 130, element: g3, displayElement: reach_g, now: "ゴールド3" },
        { hour: 155, element: g2, now: "ゴールド2" },
        { hour: 180, element: g1, now: "ゴールド1" },
        { hour: 210, element: p3, displayElement: reach_p, now: "プラチナ3" },
        { hour: 240, element: p2, now: "プラチナ2" },
        { hour: 270, element: p1, now: "プラチナ1" },
        { hour: 305, element: d3, displayElement: reach_d, now: "ダイアモンド3" },
        { hour: 340, element: d2, now: "ダイアモンド2" },
        { hour: 375, element: d1, now: "ダイアモンド1" },
        { hour: 415, element: m3, displayElement: reach_m, now: "マスター3" },
        { hour: 455, element: m2, now: "マスター2" },
        { hour: 495, element: m1, now: "マスター1" }
    ];

ranks.forEach(rank => {
    if (rankhour >= rank.hour) {
        rank.element.classList.add("bought");
        if (rank.displayElement) rank.displayElement.style.display = "block";
    }
});

ranks.forEach(rank => {
    if (counthour >= rank.hour) {
        if (rank.displayElement) rank.displayElement.style.display = "block";
    }
});

ranks.forEach(rank => {
    if (rankhour >= rank.hour) {
        now_rank.innerHTML = rank.now;
    }
});
}

setInterval(() => {
    counthour = parseInt(elapsedhour.innerHTML);
    rankhour = counthour % 510;
    rankup();
}, 1000);