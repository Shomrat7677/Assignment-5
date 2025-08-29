let copycount = 0;
let coinMinice = 20;
let favcount = 0
const historyData = []
const counterDisplay = document.getElementById("copy-caunt");
const coinCounterDisplay = document.getElementById("coin-count")
const heartCounterDiplay = document.getElementById("heart-count")
let currantBalance = parseInt(coinCounterDisplay.innerText);
let currantHeartBalance = parseInt(heartCounterDiplay.innerText);


document.getElementById("clear-btn").addEventListener("click", function () {
    let container = document.getElementById("card-container");
    container.innerHTML = "";
    container.style.display = "none";
});

document.querySelectorAll(".card").forEach(Allcard => {

    const cardName = Allcard.querySelector("#card-name").textContent
    const emergencyNumber = Allcard.querySelector("#emergency-number").textContent
    // const heartCounterDiplay = Allcard.querySelector("#heart")
    // let currantHeartBalance = parseInt(heartCounterDiplay.textContent)
    // console.log(currantBalance);



    Allcard.querySelector("#copy-btn").addEventListener("click", function () {
        navigator.clipboard.writeText(emergencyNumber).then(() => {
            copycount++
            counterDisplay.textContent = copycount;
            alert(`Copied ${cardName} : ${emergencyNumber}`)
        })

    })

    Allcard.querySelector("#call-btn").addEventListener("click", function (e) {
        e.preventDefault()
        if (currantBalance >= coinMinice) {
            currantBalance -= coinMinice
            coinCounterDisplay.innerText = currantBalance;

            function addHistory() {
                const cardData = {
                    name: `${cardName}`,
                    number: `${emergencyNumber}`,
                    date: new Date().toLocaleTimeString()
                }
                historyData.push(cardData)
                const cardContainer = document.getElementById("card-container");

                const div = document.createElement("div");
                div.className = "call-history-card flex items-center justify-between p-4 shadow-md rounded-lg bg-white mb-2";
                div.innerHTML = `
        <div class="card-title flex flex-col items-start">
            <h2>${cardData.name}</h2>
            <p>${cardData.number}</p>
        </div>
        <div class="date"><p>${cardData.date}</p></div>
        `;

                cardContainer.appendChild(div);
            }
            addHistory()
            alert(`📞 ${cardName} : ${emergencyNumber}`)
        }
        else {
            alert(`❌ You Do Not Have Enough Coins 0`)
        }
        document.getElementById("clear-btn").addEventListener("click", function () {
            let container = document.getElementById("card-container");
            container.innerHTML = "";
            container.style.display = "block";
        });

    })




    Allcard.querySelector("#heart").addEventListener("click", function () {
        favcount++
        heartCounterDiplay.textContent = favcount
    })

})







