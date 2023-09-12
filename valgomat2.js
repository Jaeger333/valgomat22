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
const resultT = document.getElementById('result')

btnNext.addEventListener('click', nextQuestion)

let qidx = 0
questionT.innerHTML = questions[qidx].question

function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked');
    
    if (radioChecked) {
        calculateResult(qidx, radioChecked.value)
        qidx++
        if (qidx < questions.length) {
            questionT.innerHTML = questions[qidx].question
            radioChecked.checked = false
        }
        else { 
            //
        }
    }

}

function calculateResult(qidx, chosen) {
    console.log(qidx, chosen)

    let partyChoices = questions[qidx][chosen]
    console.log(partyChoices)

    for (let party in partyChoices) {
        partyScores[party] += partyChoices[party]
    }
    console.log(partyScores)


    let highestParty = '';
    let highestValue = -Infinity; // Start with a very low value
    let secHighestParty = '';
    let secHighestValue = -Infinity

    for (let party in partyScores) {
        if (partyScores[party] > highestValue) {
            secHighestParty = highestParty
            secHighestValue = highestValue
            highestValue = partyScores[party];
            highestParty = party;
        }
    }

    console.log("The party with the highest value is:", highestParty);
    console.log("The highest value is:", highestValue);
    console.log("The party with the second highest value is:", secHighestParty);
    console.log("The second highest value is:", secHighestValue);
}