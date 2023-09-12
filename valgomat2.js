const questions = [
    {question: 'Det bør bli færre parkeringsplasser i sentrum', 
     heltUenig: {Rødt: -1, SV: -1, Ap: -1, Sp: 2, MDG: -1, KrF: 1, Venstre: -1, Høyre: 2, FrP: 2},
     littUenig: {Rødt: 0, SV: 0, Ap: 0, Sp: 1, MDG: 0, KrF: 2, Venstre: 0, Høyre: 1, FrP: 1},
     littEnig: {Rødt: 1, SV: 1, Ap: 2, Sp: 0, MDG: 1, KrF: 0, Venstre: 1, Høyre: 0, FrP: 0},
     heltEnig: {Rødt: 2, SV: 2, Ap: 1, Sp: -1, MDG: 2, KrF: -1, Venstre: 2, Høyre: -1, FrP: -1}
    },
    {question: 'Ringveg øst bør bygges før mer bybane', 
     heltUenig: {Rødt: 2, SV: 2, Ap: 2, Sp: -1, MDG: 2, KrF: 1, Venstre: 2, Høyre: -1, FrP: -1},
     littUenig: {Rødt: 1, SV: 1, Ap: 1, Sp: 0, MDG: 1, KrF: 2, Venstre: 1, Høyre: 0, FrP: 0},
     littEnig: {Rødt: 0, SV: 0, Ap: 0, Sp: 1, MDG: 0, KrF: 0, Venstre: 0, Høyre: 2, FrP: 1},
     heltEnig: {Rødt: -1, SV: -1, Ap: -1, Sp: 2, MDG: -1, KrF: -1, Venstre: -1, Høyre: 1, FrP: 2}
    },
    {question: 'Politi må ha lov å ransake deg for å finne ut om du har narkotika til eget bruk', 
     heltUenig: {Rødt: 2, SV: 2, Ap: -1, Sp: -1, MDG: 2, KrF: -1, Venstre: 2, Høyre: 2, FrP: -1},
     littUenig: {Rødt: 1, SV: 1, Ap: 0, Sp: 0, MDG: 1, KrF: 0, Venstre: 1, Høyre: 1, FrP: 0},
     littEnig: {Rødt: 0, SV: 0, Ap: 2, Sp: 1, MDG: 0, KrF: 1, Venstre: 0, Høyre: 0, FrP: 1},
     heltEnig: {Rødt: -1, SV: -1, Ap: 1, Sp: 2, MDG: -1, KrF: 2, Venstre: -1, Høyre: -1, FrP: 2}
    },
]; // ... add more questions

let partyScores = {
    Rødt: 0,
    SV: 0,
    Ap: 0,
    Sp: 0,
    MDG: 0,
    KrF: 0,
    Venstre: 0,
    Høyre: 0,
    FrP: 0,
};

const questionT = document.getElementById('question')
const btnNext = document.getElementById('btnNext')
const rbAnswer = document.getElementsByName('answer')
const inputForm = document.getElementById('valgomatForm')

btnNext.addEventListener('click', nextQuestion)

let qidx = 0
questionT.innerHTML = questions[qidx].question

function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked');
    
    if (radioChecked) {
        calculateResult(qidx, radioChecked.value)
        qidx++
        if (qidx < questions.length) {
            
            radioChecked.checked = false
            questionT.innerHTML = questions[qidx].question
            
        }
        else { 
            inputForm.style.display = 'none'
            showResult()
        }
        
    }

}

function calculateResult(qidx, chosen) {
    console.log(qidx, chosen)

    let partyChoices = questions[qidx][chosen]
    console.log(partyChoices)

    for (let party in partyChoices){
        partyScores[party] += partyChoices[party]
    }
    console.log(partyScores)
}

function showResult() {
    let sorted = new Map()
    const resultBox = document.getElementById("result")

    while (sorted.size < Object.keys(partyScores).length ) {
        let max = null

        for (party in partyScores) {
            if (max ===null && !sorted.has(party)) {
                max = party
            }
            else if(partyScores[party] > partyScores[max] && !sorted.has(party)) {
                max = party
            }
        }
        sorted.set(max, partyScores[max])
    }


    sorted.forEach((score, party) => {
        resultBox.innerHTML += (party + ": " + score + " ")
    });

}