var mcqresults = [];
var comsecCounter = 0;
var histCounter = 0;
var socsciCounter = 0;
var currentCounter = 0;

var comsecGPT = 0;
var histGPT = 0;
var socsciGPT = 0;
var correctCounter = 0;

function mcqGenerate(route) {
    fetch(route)
    .then(response => response.json())
    .then(data => {
        mcqresults = data.documents;
      
        mcqresults.forEach(docu => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${docu.question}</td>
                <td>${docu.optionA}</td>
                <td>${docu.optionB}</td>
                <td>${docu.optionC}</td>
                <td>${docu.optionD}</td>
                <td>${docu.anticipatedAnswer}</td>
                <td>${docu.responseGPT}</td>
            `;
            result.appendChild(row);
            document.getElementById('mcq-info').innerHTML = `${mcqresults[0].question}`;
        });
        
        switch (route) {
            case '/computer-security-mcq':
                comsecCounter++;
                currentCounter = comsecCounter;
                break;

            case '/prehistory-mcq':
                histCounter++;
                currentCounter = histCounter;
                break;

            case '/sociology-mcq':
                socsciCounter++;
                currentCounter = socsciCounter;
                break;
            
            default:
                console.log('Invalid route:',route);
                break;
        }

        graphIt(route, currentCounter);
       
    })
    .catch((err) => console.log('Error fetching data:', err));
}

function graphIt(route, countTotal) {
    const canvas = document.getElementById("myCanvas");
    const ctx2 = canvas.getContext("2d");

    switch (route) {
        case '/computer-security-mcq':
            countTotal = comsecCounter;
            ctx2.beginPath(); // Define a new path
            ctx2.fillStyle = "purple";
            ctx2.fillRect(100,549-countTotal*10,45,countTotal*10);
            ctx2.fillStyle = "green";
            ctx2.fillRect(145,549-correctCounter*10,45,correctCounter*10);
            break;

        case '/prehistory-mcq':
            countTotal = histCounter;
            ctx2.beginPath(); // Define a new path
            ctx2.fillStyle = "purple";
            ctx2.fillRect(275,549-countTotal*10,45,countTotal*10);
            ctx2.fillStyle = "green";
            ctx2.fillRect(320,549-correctCounter*10,45,correctCounter*10);
            break;

        case '/sociology-mcq':
            countTotal = socsciCounter;
            ctx2.beginPath(); // Define a new path
            ctx2.fillStyle = "purple";
            ctx2.fillRect(425,549-countTotal*10,45,countTotal*10);
            ctx2.fillStyle = "green";
            ctx2.fillRect(470,549-correctCounter*10,45,correctCounter*10);
            break;
        
        default:
            console.log('Invalid route:',route);
            break;
    }
}