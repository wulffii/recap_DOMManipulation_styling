// Når du er færdig med denne opgave, ser siden ca sådan her ud: https://prnt.sc/LFbMfsiq2ZV8

// 1. Der skal, med brug af javascript, indsættes 3 skills mere, altså nedenstående html. Se mere i punkt 1.1 - 1.6 under
/*
    <div>
        <span>CSS:</span>
        <span>60%</span>
        <meter min="0" max="100" value="60"></meter>
    </div>
*/

// 1.1 Fang .mySkills med en egnet metode

const mySkill = document.querySelector(".mySkills")

// 1.2 Anvend document.createElement() til at skabe en div, to span og et meter tag

const skillDiv = document.createElement("div")
const skillSpan1 = document.createElement("span")
const skillSpan2 = document.createElement("span")
const skillMeter = document.createElement("meter")


// 1.3 Anvend document.textContent til at indsætte data i 2*span(se ovenfor for indhold)

skillSpan1.textContent = "JavaScript"
skillSpan2.textContent = "30"


// 1.4 Anvend .setAttribute() til at sætte de tre attributter i meter-tagget (min, max og value)

skillMeter.setAttribute("min", "0")
skillMeter.setAttribute("max", "100")
skillMeter.setAttribute("value", "30")


// 1.5 Anvend .append() til at indsætte <div> i .mySkills

skillDiv.append(skillSpan1, skillSpan2, skillMeter)

// 1.6 Anvend .append() til at indsætte 2*span og 1*meter i <div>

mySkill.append(skillDiv);

// 2. Anvend .cloneNode() til at klone den <li> med "Mit portfolio" og indsætte den to gange nedenfor (Ja, så kommer der til at stå "Mit portfolio" tre gange - pyt med det:) )

const list = document.querySelector("ul"); 
const listItem = document.querySelector("li"); 

for (let i = 0; i < 2; i++) {
    const clonedItem = listItem.cloneNode(true); 
    list.appendChild(clonedItem); 
}


// 3. I footeren er der en div med class="oval". Anvend .style-objektet til at give den følgende:
// width: 40px, height: 40px, background-color: pink, border-radius: 50%

const ovale = document.querySelector(".oval")

ovale.style.width ="40px"
ovale.style.height ="40px"
ovale.style.backgroundColor="pink"
ovale.style.borderRadius="50%"

// 4. Se i dit .css dokument nederst at der er en class kaldet .niceStyling. Anvend .classList.add() til at sætte denne klasse på .oval2

const ovaler = document.querySelector(".oval2")

ovaler.classList.add("niceStyling")
