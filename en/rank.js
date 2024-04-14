counthour = parseInt(elapsedhour.innerHTML);
counthour_s1 = parseInt(elapsedhour_s1.innerHTML);
counthour_s2 = parseInt(elapsedhour_s2.innerHTML);
rankhour = counthour % 510;
rankhour_s1 = counthour_s1 % 510;
rankhour_s2 = counthour_s2 % 510;

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
let now_rank_s1 = document.getElementById("now_rank_s1");
let now_rank_s2 = document.getElementById("now_rank_s2");

const rankup = () => {
    const ranks = [
        { hour: 15, element: b3, achive: reach_b, achive_s1: reach_b_s1, achive_s2: reach_b_s2, now: "Bronze 3" },
        { hour: 30, element: b2, now: "Bronze 2" },
        { hour: 45, element: b1, now: "Bronze 1" },
        { hour: 65, element: s3, achive: reach_s, achive_s1: reach_s_s1, achive_s2: reach_s_s2, now: "Silver 3" },
        { hour: 85, element: s2, now: "Silver 2" },
        { hour: 105, element: s1, now: "Silver 1" },
        { hour: 130, element: g3, achive: reach_g, achive_s1: reach_g_s1, achive_s2: reach_g_s2, now: "Gold 3" },
        { hour: 155, element: g2, now: "Gold 2" },
        { hour: 180, element: g1, now: "Gold 1" },
        { hour: 210, element: p3, achive: reach_p, achive_s1: reach_p_s1, achive_s2: reach_p_s2, now: "Platinum 3" },
        { hour: 240, element: p2, now: "Platinum 2" },
        { hour: 270, element: p1, now: "Platinum 1" },
        { hour: 305, element: d3, achive: reach_d, achive_s1: reach_d_s1, achive_s2: reach_d_s2, now: "Diamond 3" },
        { hour: 340, element: d2, now: "Diamond 2" },
        { hour: 375, element: d1, now: "Diamond 1" },
        { hour: 415, element: m3, achive: reach_m, achive_s1: reach_m_s1, achive_s2: reach_m_s2, now: "Master 3" },
        { hour: 455, element: m2, now: "Master 2" },
        { hour: 495, element: m1, now: "Master 1" }
    ];

ranks.forEach(rank => {
    if (rankhour >= rank.hour) {
        rank.element.classList.add("bought");
        now_rank.innerHTML = rank.now;
    }
});

ranks.forEach(rank => {
    if (counthour >= rank.hour) {
        if (rank.achive) rank.achive.style.display = "block";
    }
});

ranks.forEach(rank => {
    if (counthour_s1 >= rank.hour) {
        if (rank.achive_s1) rank.achive_s1.style.display = "block";
    }
});

ranks.forEach(rank => {
    if (counthour_s2 >= rank.hour) {
        if (rank.achive_s2) rank.achive_s2.style.display = "block";
    }
});

ranks.forEach(rank => {
    if (rankhour_s1 >= rank.hour) {
        now_rank_s1.innerHTML = rank.now;
    }
});

ranks.forEach(rank => {
    if (rankhour_s2 >= rank.hour) {
        now_rank_s2.innerHTML = rank.now;
    }
});
}

setInterval(() => {
    counthour = parseInt(elapsedhour.innerHTML);
    counthour_s1 = parseInt(elapsedhour_s1.innerHTML);
    counthour_s2 = parseInt(elapsedhour_s2.innerHTML);
    rankhour = counthour % 510;
    rankhour_s1 = counthour_s1 % 510;
    rankhour_s2 = counthour_s2 % 510;
    rankup();
}, 1000);