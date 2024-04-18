let hour = document.getElementById('hour');
let min = document.getElementById('min');
let second = document.getElementById('second');

let Numerals = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001"];
function trans(xi, y) {
    let x = Numerals[xi];
    let A = parseInt(x[0]);
    let B = parseInt(x[1]);
    let C = parseInt(x[2]);
    let D = parseInt(x[3]);

   
let childElements = Array.from(y[0].querySelectorAll('.a, .b, .c, .d, .e, .f, .g'));




    let rels = [(A+C+B*D+(1-B)*(1-D)), (1-B+ (1-C)*(1-D)+C*D), (B-C+D+1), ((1-B)*(1-D)+ C*(1-D)+B*(1-C)*D+(1-B)*C+A), ((1-B)*(1-D) + C*(1-D)), (A+ (1-C)*(1-D)+B*(1-C)+B*(1-D)), (A+B*(1-C)+(1-B)*C+C*(1-D))];


    for (let i = 0; i < 7; i++) {
        if (rels[i] > 0) {
            childElements[i].style.display = "block";
            childElements[i].style.backgroundColor = "red";
        } else {
            childElements[i].style.display = "none";
        }
    }
}


function calll() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    hour.style.transform = `rotate(${30 * h + m / 2}deg)`;
    min.style.transform = `rotate(${6 * m}deg)`;
    second.style.transform = `rotate(${6 * s}deg)`;

    let h1 = parseInt(h / 10);
    let x1 = document.getElementsByClassName('hour1');
    trans(h1, x1);

    let h0 = h % 10;
    let x0 = document.getElementsByClassName('hour0');
    trans(h0, x0);

    let m1 = parseInt(m / 10);
    let z1 = document.getElementsByClassName('min1');
    trans(m1, z1);

    let m0 = m % 10;
    let z0 = document.getElementsByClassName('min0');
    trans(m0, z0);

    let s1 = parseInt(s / 10);
    let q1 = document.getElementsByClassName('sec1');
    trans(s1, q1);

    let s0 = s % 10;
    let q0 = document.getElementsByClassName('sec0');
    trans(s0,q0);
}


setInterval(calll,1000);