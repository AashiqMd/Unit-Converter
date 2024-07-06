/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEle = document.getElementById("length-display-ele")
const volumeEle = document.getElementById("volume-display-ele")
const massEle = document.getElementById("mass-display-ele")
const inputEle = document.getElementById("input-ele")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", () => {
    const feet = Math.round(inputEle.value*3.28084 * 1000)/1000
    const meter = Math.round(inputEle.value/3.28084 * 1000)/1000
    const liter = Math.round(inputEle.value/0.264 * 1000)/1000
    const gallon = Math.round(inputEle.value*0.264 * 1000)/1000
    const kilogram = Math.round(inputEle.value/2.204 * 1000)/1000
    const pound = Math.round(inputEle.value*2.204 * 1000)/1000

    lengthEle.textContent = `${inputEle.value} meters = ${feet} feet | ${inputEle.value} feet = ${meter} meters`
    volumeEle.textContent = `${inputEle.value} liter = ${gallon} gallon | ${inputEle.value} gallon = ${liter} liter`
    massEle.textContent = `${inputEle.value} kilogram = ${pound} pound | ${inputEle.value} pound = ${kilogram} kilogram`

})