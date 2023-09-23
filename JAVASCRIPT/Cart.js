// ITEM 1
let name = document.getElementById("name");
name.innerText = localStorage.getItem("Name");

let price = document.getElementById("price");
price.innerText = localStorage.getItem("Price");

let p1 = localStorage.getItem("Price");

// ITEM 2
let name2 = document.getElementById("name2");
name2.innerText = localStorage.getItem("Name2");

let price2 = document.getElementById("price2");
price2.innerText = localStorage.getItem("Price2");

let p2 = localStorage.getItem("Price2");

// ITEM 3
let name3 = document.getElementById("name3");
name3.innerText = localStorage.getItem("Name3");

let price3 = document.getElementById("price3");
price3.innerText = localStorage.getItem("Price3");

let p3 = localStorage.getItem("Price3");

// ITEM 4
let name4 = document.getElementById("name4");
name4.innerText = localStorage.getItem("Name4");

let price4 = document.getElementById("price4");
price4.innerText = localStorage.getItem("Price4");
let p4 = localStorage.getItem("Price4");

// ITEM 5
let name5 = document.getElementById("name5");
name5.innerText = localStorage.getItem("Name5");

let price5 = document.getElementById("price5");
price5.innerText = localStorage.getItem("Price5");
let p5 = localStorage.getItem("Price5");

// ITEM 6
let name6 = document.getElementById("name6");
name6.innerText = localStorage.getItem("Name6");

let price6 = document.getElementById("price6");
price6.innerText = localStorage.getItem("Price6");
let p6 = localStorage.getItem("Price6");

// ITEM 7
let name7 = document.getElementById("name7");
name7.innerText = localStorage.getItem("Name7");

let price7 = document.getElementById("price7");
price7.innerText = localStorage.getItem("Price7");
let p7 = localStorage.getItem("Price7");

// ITEM 8
let name8 = document.getElementById("name8");
name8.innerText = localStorage.getItem("Name8");

let price8 = document.getElementById("price8");
price8.innerText = localStorage.getItem("Price8");
let p8 = localStorage.getItem("Price8");

// ITEM 9
let name9 = document.getElementById("name9");
name9.innerText = localStorage.getItem("Name9");

let price9 = document.getElementById("price9");
price9.innerText = localStorage.getItem("Price9");
let p9 = localStorage.getItem("Price9");

// ITEM 10
let name10 = document.getElementById("name10");
name10.innerText = localStorage.getItem("Name10");

let price10 = document.getElementById("price10");
price10.innerText = localStorage.getItem("Price10");
let p10 = localStorage.getItem("Price10");

// ITEM 11
let name11 = document.getElementById("name11");
name11.innerText = localStorage.getItem("Name11");

let price11 = document.getElementById("price11");
price11.innerText = localStorage.getItem("Price11");
let p11 = localStorage.getItem("Price11");

// ITEM 12
let name612= document.getElementById("name12");
name12.innerText = localStorage.getItem("Name12");

let price12 = document.getElementById("price12");
price12.innerText = localStorage.getItem("Price12");
let p12 = localStorage.getItem("Price12");

// ITEM 13
let name13 = document.getElementById("name13");
name13.innerText = localStorage.getItem("Name13");

let price13 = document.getElementById("price13");
price13.innerText = localStorage.getItem("Price13");
let p13 = localStorage.getItem("Price13");

// ITEM 14
let name14 = document.getElementById("name14");
name14.innerText = localStorage.getItem("Name14");

let price14 = document.getElementById("price14");
price14.innerText = localStorage.getItem("Price14");
let p14 = localStorage.getItem("Price14");

// ITEM 15
let name15 = document.getElementById("name15");
name15.innerText = localStorage.getItem("Name15");

let price15 = document.getElementById("price15");
price15.innerText = localStorage.getItem("Price15");
let p15 = localStorage.getItem("Price15");

// ITEM 16
let name16 = document.getElementById("name16");
name16.innerText = localStorage.getItem("Name16");

let price16 = document.getElementById("price16");
price16.innerText = localStorage.getItem("Price16");

let p16 = localStorage.getItem("Price16");

function totalCost(){
    var total = parseInt(p1.substring(1)) + parseInt(p2.substring(1)) + parseInt(p15.substring(1)) + parseInt(p15.substring(1)) + parseInt(p15.substring(1)) + parseInt(p15.substring(1)) + parseInt(p15.substring(1)) + parseInt(p15.substring(1)) + parseInt(p15.substring(1)) + parseInt(p15.substring(1)) + parseInt(p15.substring(1)) + parseInt(p15.substring(1)) + parseInt(p15.substring(1)) + parseInt(p15.substring(1)) + parseInt(p15.substring(1)) + parseInt(p16.substring(1));
    if(localStorage.key){
        
    }
    localStorage.setItem("totalCost", total);
    console.log(total);
}

totalCost();
