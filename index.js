const inpu=document.getElementById("input-el");
const len=document.getElementById("length");
const vol=document.getElementById("volume");
const mass=document.getElementById("mass");
const butten=document.getElementById("btn");
butten.addEventListener("click",function(){
    let lol=inpu.value;
    let feet=lol*3.281;
    let meters=lol/3.281;
    meters=meters.toFixed(2);
    let sentence=`${lol} meters = ${feet} feet | ${lol} feet = ${meters} meters`;
    len.textContent=sentence;
    let gallon=lol*0.024;
    let litre=lol/0.264;
    litre=litre.toFixed(2)
    let sens=`${lol} litre = ${gallon} gallon | ${lol} gallon = ${litre} litre`;
    vol.textContent=sens;
    let pound=lol*2.204;
    pound=pound.toFixed(2)
    let kilo=lol/2.204;
    kilo=kilo.toFixed(2);
    let krack =`${lol} kilo = ${pound} pounds | ${lol} pounds = ${kilo} kilos`;
    mass.textContent=krack;


})
