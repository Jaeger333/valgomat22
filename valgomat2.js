const questions = [
    {question: 'Det bør bli færre parkeringsplasser i sentrum', 
     heltUenig: {R: -1, SV: -1, Ap: -1, Sp: 2, MDG: -1, V: -1, H: 2, FrP: 2},
     littUenig: {R: 0, SV: 0, Ap: 0, Sp: 1, MDG: 0, V: 0, H: 1, FrP: 1},
     littEnig: {R: 1, SV: 1, Ap: 2, Sp: 0, MDG: 1, V: 1, H: 0, FrP: 0},
     heltEnig: {R: 2, SV: 2, Ap: 1, Sp: -1, MDG: 2, V: 2, H: -1, FrP: -1}
    },
    {question: 'Ringveg øst bør bygges før mer bybane', 
     heltUenig: {R: 2, SV: 2, Ap: 2, Sp: -1, MDG: 2, V: 2, H: -1, FrP: -1},
     littUenig: {R: 1, SV: 1, Ap: 1, Sp: 0, MDG: 1, V: 1, H: 0, FrP: 0},
     littEnig: {R: 0, SV: 0, Ap: 0, Sp: 1, MDG: 0, V: 0, H: 2, FrP: 1},
     heltEnig: {R: -1, SV: -1, Ap: -1, Sp: 2, MDG: -1, V: -1, H: 1, FrP: 2}
    },
    {question: 'Politi må ha lov å ransake deg for å finne ut om du har narkotika til eget bruk', 
     heltUenig: {R: 2, SV: 2, Ap: -1, Sp: -1, MDG: 2, V: 2, H: 2, FrP: -1},
     littUenig: {R: 1, SV: 1, Ap: 0, Sp: 0, MDG: 1, V: 1, H: 1, FrP: 0},
     littEnig: {R: 0, SV: 0, Ap: 2, Sp: 1, MDG: 0, V: 0, H: 0, FrP: 1},
     heltEnig: {R: -1, SV: -1, Ap: 1, Sp: 2, MDG: -1, V: -1, H: -1, FrP: 2}
    },
    {question: 'Bergen må bruke penger på å gi fastlegene færre pasienter og bedre arbeidsvilkår', 
     heltUenig: {R: -1, SV: -1, Ap: -1, Sp: -1, MDG: -1, V: -1, H: -1, FrP: -1},
     littUenig: {R: 0, SV: 0, Ap: 0, Sp: 0, MDG: 0, V: 0, H: 0, FrP: 0},
     littEnig: {R: 1, SV: 1, Ap: 2, Sp: 2, MDG: 1, V: 2, H: 2, FrP: 2},
     heltEnig: {R: 2, SV: 2, Ap: 1, Sp: 1, MDG: 2, V: 1, H: 1, FrP: 1}
    },
    {question: 'Vi kan prøve ut regulert salg av cannabis i Norge', 
     heltUenig: {R: 2, SV: 2, Ap: 2, Sp: 2, MDG: -1, V: -1, H: 2, FrP: 2},
     littUenig: {R: 1, SV: 1, Ap: 1, Sp: 1, MDG: 0, V: 0, H: 1, FrP: 1},
     littEnig: {R: 0, SV: 0, Ap: 0, Sp: 0, MDG: 1, V: 1, H: 0, FrP: 0},
     heltEnig: {R: -1, SV: -1, Ap: -1, Sp: -1, MDG: 2, V: 2, H: -1, FrP: -1}
    },
    {question: 'Vi bør betale mer i bompenger', 
     heltUenig: {R: 2, SV: -1, Ap: 2, Sp: 2, MDG: -1, V: -1, H: 2, FrP: 2},
     littUenig: {R: 1, SV: 0, Ap: 1, Sp: 1, MDG: 0, V: 0, H: 1, FrP: 1},
     littEnig: {R: 0, SV: 1, Ap: 0, Sp: 0, MDG: 1, V: 2, H: 0, FrP: 0},
     heltEnig: {R: -1, SV: 2, Ap: -1, Sp: -1, MDG: 2, V: 1, H: -1, FrP: -1}
    },
    {question: 'Bergen må sette av mer areal til bygge boliger', 
     heltUenig: {R: 2, SV: 1, Ap: -1, Sp: -1, MDG: 2, V: 1, H: -1, FrP: -1},
     littUenig: {R: 1, SV: 2, Ap: 0, Sp: 0, MDG: 1, V: 2, H: 0, FrP: 0},
     littEnig: {R: 0, SV: 0, Ap: 2, Sp: 2, MDG: 0, V: 0, H: 1, FrP: 1},
     heltEnig: {R: -1, SV: -1, Ap: 1, Sp: 1, MDG: -1, V: -1, H: 2, FrP: 2}
    },
    {question: 'Det bør bli omkamp for å hindre at bybanen går forbi bryggen', 
     heltUenig: {R: 2, SV: 2, Ap: 2, Sp: -1, MDG: 2, V: 2, H: 2, FrP: -1},
     littUenig: {R: 1, SV: 1, Ap: 1, Sp: 0, MDG: 1, V: 1, H: 1, FrP: 0},
     littEnig: {R: 0, SV: 0, Ap: 0, Sp: 1, MDG: 0, V: 0, H: 0, FrP: 1},
     heltEnig: {R: -1, SV: -1, Ap: -1, Sp: 2, MDG: -1, V: -1, H: -1, FrP: 2}
    },
    {question: 'Eiendomsskatten i Bergen må fjernes på sikt', 
     heltUenig: {R: 2, SV: 2, Ap: 2, Sp: -1, MDG: 2, V: 1, H: -1, FrP: -1},
     littUenig: {R: 1, SV: 1, Ap: 1, Sp: 0, MDG: 1, V: 2, H: 0, FrP: 0},
     littEnig: {R: 0, SV: 0, Ap: 0, Sp: 1, MDG: 0, V: 0, H: 1, FrP: 1},
     heltEnig: {R: -1, SV: -1, Ap: -1, Sp: 2, MDG: -1, V: -1, H: 2, FrP: 2}
    },
    {question: 'Cruiseskip bør ikke få komme til Bergen', 
     heltUenig: {R: 2, SV: 2, Ap: 2, Sp: -1, MDG: 2, V: 1, H: -1, FrP: -1},
     littUenig: {R: 1, SV: 1, Ap: 1, Sp: 0, MDG: 1, V: 2, H: 0, FrP: 0},
     littEnig: {R: 0, SV: 0, Ap: 0, Sp: 1, MDG: 0, V: 0, H: 1, FrP: 1},
     heltEnig: {R: -1, SV: -1, Ap: -1, Sp: 2, MDG: -1, V: -1, H: 2, FrP: 2}
    },
    {question: 'Skoler i Bergen bør ha mobilforbud', 
     heltUenig: {R: 1, SV: 1, Ap: 2, Sp: -1, MDG: -1, V: 1, H: 1, FrP: 1},
     littUenig: {R: 2, SV: 2, Ap: 1, Sp: 0, MDG: 0, V: 2, H: 2, FrP: 2},
     littEnig: {R: 0, SV: 0, Ap: 0, Sp: 1, MDG: 1, V: 0, H: 0, FrP: 0},
     heltEnig: {R: -1, SV: -1, Ap: -1, Sp: 2, MDG: 2, V: -1, H: -1, FrP: -1}
    },
    {question: 'Ungdomsskoleelever i Bergen skal få gratis skolemåltider', 
     heltUenig: {R: -1, SV: -1, Ap: -1, Sp: -1, MDG: -1, V: 1, H: 2, FrP: 2},
     littUenig: {R: 0, SV: 0, Ap: 0, Sp: 0, MDG: 0, V: 2, H: 1, FrP: 1},
     littEnig: {R: 1, SV: 1, Ap: 1, Sp: 1, MDG: 1, V: 0, H: 0, FrP: 0},
     heltEnig: {R: 2, SV: 2, Ap: 2, Sp: 2, MDG: 2, V: -1, H: -1, FrP: -1}
    },
    {question: 'Norge bør satse på kjernekraftanlegg for å produsere strøm', 
     heltUenig: {R: 1, SV: 2, Ap: 2, Sp: 1, MDG: 1, V: 1, H: -1, FrP: 1},
     littUenig: {R: 2, SV: 1, Ap: 1, Sp: 2, MDG: 2, V: 2, H: 0, FrP: 0},
     littEnig: {R: 0, SV: 0, Ap: 0, Sp: 0, MDG: 0, V: 0, H: 2, FrP: 1},
     heltEnig: {R: -1, SV: -1, Ap: -1, Sp: -1, MDG: -1, V: 1, H: -1, FrP: 2}
    },
    {question: 'Norske barn lærer altfor lite om kristendom på skolen', 
     heltUenig: {R: 2, SV: 2, Ap: 2, Sp: 1, MDG: 2, V: 2, H: -1, FrP: -1},
     littUenig: {R: 1, SV: 1, Ap: 1, Sp: 2, MDG: 1, V: 1, H: 0, FrP: 0},
     littEnig: {R: 0, SV: 0, Ap: 0, Sp: 0, MDG: 0, V: 0, H: 2, FrP: 2},
     heltEnig: {R: -1, SV: -1, Ap: -1, Sp: -1, MDG: -1, V: -1, H: -1, FrP: 1}
    },
    {question: 'Vestland bør deles i to fylker igjen', 
     heltUenig: {R: -1, SV: 1, Ap: 2, Sp: 1, MDG: 2, V: 2, H: 2, FrP: 2},
     littUenig: {R: 0, SV: 2, Ap: 1, Sp: 2, MDG: 1, V: 1, H: 1, FrP: 1},
     littEnig: {R: 1, SV: 0, Ap: 0, Sp: 0, MDG: 0, V: 0, H: 0, FrP: 0},
     heltEnig: {R: 2, SV: -1, Ap: -1, Sp: -1, MDG: -1, V: -1, H: -1, FrP: -1}
    },
    {question: 'FN har altfor mye makt over Norge', 
     heltUenig: {R: 2, SV: 2, Ap: 2, Sp: 2, MDG: 2, V: 2, H: 2, FrP: -1},
     littUenig: {R: 1, SV: 1, Ap: 1, Sp: 1, MDG: 1, V: 1, H: 1, FrP: 0},
     littEnig: {R: 0, SV: 0, Ap: 0, Sp: 0, MDG: 0, V: 0, H: 0, FrP: 2},
     heltEnig: {R: -1, SV: -1, Ap: -1, Sp: -1, MDG: -1, V: -1, H: -1, FrP: 1}
    },
];

let partyScores = {
    R: {
        score: 0,
        logo: 'img/rlogo.jpg'
    },
    SV: {
        score: 0,
        logo: 'img/svlogo.png'
    },
    Ap: {
        score: 0,
        logo: 'img/aplogo.png'
    },
    Sp: {
        score: 0,
        logo: 'img/splogo.png'
    },
    MDG: {
        score: 0,
        logo: 'img/mdglogo.png'
    },
    KrF: {
        score: -50,
        logo: 'img/krflogo.png'
    },
    V: {
        score: 0,
        logo: 'img/vlogo.png'
    },
    H: {
        score: 0,
        logo: 'img/hlogo.png'
    },
    FrP: {
        score: 0,
        logo: 'img/frplogo.png'
    }
};

console.log(partyScores)


const questionT = document.getElementById('question')
const btnNext = document.getElementById('btnNext')
const btnBack = document.getElementById('btnBack')
const btnStart = document.getElementById('startButton')
const rbAnswer = document.getElementsByName('answer')
const inputForm = document.getElementById('valgomatForm')
const test = document.getElementById('test')
const start = document.getElementById('start')

btnStart.addEventListener('click', showElements)
btnNext.addEventListener('click', nextQuestion)
btnBack.addEventListener('click', prevQuestion)


// Legger til en event listener to hver radio button
document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        // Resetter bakgrunnsfargen for alle labels/svaralternativene
        document.querySelectorAll('label').forEach(function(label) {
            label.style.backgroundColor = 'white';
            label.style.color = 'black';
        });

        // Resetter bakgrunnsfargen for det valgte alternativet
        if (this.checked) {
            this.parentNode.style.backgroundColor = 'black';
            this.parentNode.style.color = 'white';
        }
    });
});


// Viser og gjemmer elementer
function showElements() {
    start.style.display = "none";
    test.style.display = "block";
}

let qidx = 0
questionT.innerHTML = questions[qidx].question

// Nesteknapp - Gå til neste spørsmål
function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked');
    
    if (radioChecked) {
        calculateResult(qidx, radioChecked.value)
        qidx++
        if (qidx < questions.length) {
            radioChecked.checked = false
            questionT.innerHTML = questions[qidx].question
            updateProgressBar();
            btnBack.style.display = "block"
            
            // Setter fargen på valgte alternativ tilbake til hvit
            document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
                radio.parentNode.style.backgroundColor = 'white';
                radio.parentNode.style.color = 'black';
            });
            
        }
        else { 
            test.style.display = 'none'
            updateProgressBar();
            showResult()
        }
    }
}


// Tilbakeknapp - Gå tilbake til forrige spørsmål
function prevQuestion() {
    qidx--
    if (qidx <= 0) {
        btnBack.style.display = 'none'
    }

    for (let party in prevChoices[qidx]){
        partyScores[party].score -= prevChoices[qidx][party]
    }
    prevChoices.splice(qidx)
    console.log(partyScores)
    questionT.innerHTML = questions[qidx].question

    updateProgressBar();
}

// Regner ut partienes poeng
let partyChoices = null
let prevChoices = []
function calculateResult(qidx, chosen) {
    console.log(qidx, chosen)

    partyChoices = questions[qidx][chosen]
    prevChoices.push(partyChoices)
    console.log(partyChoices)

    for (let party in partyChoices){
        partyScores[party].score += partyChoices[party]
    }
    console.log(partyScores)
}

function showResult() {

// Sorterer partiene etter poeng
    let sorted = [];

    while (sorted.length < Object.keys(partyScores).length) {
        let maxParty = null;
        let maxScore = -Infinity;

        for (party in partyScores) {
            if (!sorted.includes(party) && partyScores[party].score > maxScore) {
                maxParty = party;
                maxScore = partyScores[party].score;
            }
        }
        sorted.push(maxParty);
    }

// Regner ut prosent enig med partiene
    let sortedPercent = []
    for (let party in sorted) {
        sortedPercent.push(((partyScores[sorted[party]].score/(questions.length*2))*100).toFixed(0))
    }

    console.log("sorted" + sorted)
    console.log("sorted percetn" + sortedPercent)
    

// Lager resultat elementene
    const results = document.getElementById('result');
    let count = 0
    sorted.forEach(party => {
        if (count < 3) {
            const resultItem = document.createElement('li');
            resultItem.textContent = `${party}: ${sortedPercent[count]}% enig`;
            resultItem.style.backgroundImage = `url(${partyScores[party].logo})`
            results.appendChild(resultItem);
            count++
        }
    });

    document.getElementById("progress-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
}


// Progress bar
const progressBar = document.getElementById('progress');
function updateProgressBar() {
    let progressValue = ((qidx/questions.length)*100);
    let width = progressValue;
    progressBar.style.width = width + '%';
    progressBar.innerHTML = width.toFixed(0) + '%';
}

