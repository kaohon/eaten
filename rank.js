counthour = elapsedhour.innerHTML;

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

const rankup = 	() => {
	if (counthour >= 15) {
		b3.classList.add("bought");
		reach_b.style.display = "block";
	}
	if (counthour >= 30) {
		b2.classList.add("bought");
	}
	if (counthour >= 45) {
		b1.classList.add("bought");
	}
	if (counthour >= 65) {
		s3.classList.add("bought");
		reach_s.style.display = "block";
	}
	if (counthour >= 85) {
		s2.classList.add("bought");
	}
	if (counthour >= 105) {
		s1.classList.add("bought");
	}
	if (counthour >= 130) {
		g3.classList.add("bought");
		reach_g.style.display = "block";
	}
	if (counthour >= 155) {
		g2.classList.add("bought");
	}
	if (counthour >= 180) {
		g1.classList.add("bought");
	}
	if (counthour >= 210) {
		p3.classList.add("bought");
		reach_p.style.display = "block";
	}
	if (counthour >= 240) {
		p2.classList.add("bought");
	}
	if (counthour >= 270) {
		p1.classList.add("bought");
	}
	if (counthour >= 305) {
		d3.classList.add("bought");
		reach_d.style.display = "block";
	}
	if (counthour >= 340) {
		d2.classList.add("bought");
	}
	if (counthour >= 375) {
		d1.classList.add("bought");
	}
	if (counthour >= 415) {
		m3.classList.add("bought");
		reach_m.style.display = "block";
	}
	if (counthour >= 455) {
		m2.classList.add("bought");
	}
	if (counthour >= 495) {
		m1.classList.add("bought");
	}
}
setInterval(rankup, 1000);