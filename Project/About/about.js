let progressBar = document.querySelector(".circular-progress");
let valuecontainer = document.querySelector(".value-container");

let progressvalue = 0;
let progressEndvalue = 80;
let speed = 50;


let progress = setInterval(() => {
    progressvalue++;
    valuecontainer.textContent = `${progressvalue}%`
    
    progressBar.style.background = `conic-gradient(#222 ${progressvalue * 3.6}deg, #999 0deg)`


    if (progressvalue == progressEndvalue) {
        clearInterval(progress);
    }
},speed);

let progressBar1 = document.querySelector(".circular-progress1");
let valuecontainer1 = document.querySelector(".value-container1");

let progressvalue1 = 0;
let progressEndvalue1 = 55;
let speed1 = 50;


let progress1 = setInterval(() => {
    progressvalue1++;
    valuecontainer1.textContent = `${progressvalue1}%`
    
    progressBar1.style.background = `conic-gradient(#222 ${progressvalue1 * 3.6}deg, #999 0deg)`


    if (progressvalue1 == progressEndvalue1) {
        clearInterval(progress1);
    }
},speed1);

let progressBar2 = document.querySelector(".circular-progress2");
let valuecontainer2 = document.querySelector(".value-container2");

let progressvalue2 = 0;
let progressEndvalue2 = 88;
let speed2 = 50;


let progress2 = setInterval(() => {
    progressvalue2++;
    valuecontainer2.textContent = `${progressvalue2}%`
    
    progressBar2.style.background = `conic-gradient(#222 ${progressvalue2 * 3.6}deg, #999 0deg)`


    if (progressvalue2 == progressEndvalue2) {
        clearInterval(progress2);
    }
},speed1);

let progressBar3 = document.querySelector(".circular-progress3");
let valuecontainer3 = document.querySelector(".value-container3");

let progressvalue3 = 0;
let progressEndvalue3 = 72;
let speed3 = 50;


let progress3 = setInterval(() => {
    progressvalue3++;
    valuecontainer3.textContent = `${progressvalue3}%`
    
    progressBar3.style.background = `conic-gradient(#222 ${progressvalue3 * 3.6}deg, #999 0deg)`


    if (progressvalue3 == progressEndvalue3) {
        clearInterval(progress3);
    }
},speed1);

let progressBar4 = document.querySelector(".circular-progress4");
let valuecontainer4 = document.querySelector(".value-container4");

let progressvalue4 = 0;
let progressEndvalue4 = 34;
let speed4 = 50;


let progress4 = setInterval(() => {
    progressvalue4++;
    valuecontainer4.textContent = `${progressvalue4}%`
    
    progressBar4.style.background = `conic-gradient(#222 ${progressvalue4 * 3.6}deg, #999 0deg)`


    if (progressvalue4 == progressEndvalue4) {
        clearInterval(progress4);
    }
},speed1);

let progressBar5 = document.querySelector(".circular-progress5");
let valuecontainer5 = document.querySelector(".value-container5");

let progressvalue5 = 0;
let progressEndvalue5 = 94;
let speed5 = 50;


let progress5 = setInterval(() => {
    progressvalue5++;
    valuecontainer5.textContent = `${progressvalue5}%`
    
    progressBar5.style.background = `conic-gradient(#222 ${progressvalue5 * 3.6}deg, #999 0deg)`


    if (progressvalue5 == progressEndvalue5) {
        clearInterval(progress5);
    }
},speed1);