let alunni = [
    { nome: 'Mario', cognome: 'Rossi', anno: 'Primo' },
    { nome: 'Dario', cognome: 'Esposito', anno: 'Secondo' },
    { nome: 'Emanuela', cognome: 'Verdi', anno: 'Terzo' },
    { nome: 'Giulia', cognome: 'Giallini', anno: 'Secondo' },
    { nome: 'Mario', cognome: 'Esposito', anno: 'Terzo' },
    { nome: 'Giulia', cognome: 'Rossi', anno: 'Primo' },
]



let primoAnno = alunni.filter((element) => element.anno === 'Primo');
let secondoAnno = alunni.filter((element) => element.anno === 'Secondo');
let terzoAnno = alunni.filter((element) => element.anno === 'Terzo');

document.querySelectorAll('h3')[0].addEventListener('click', () => {
    let str = '';
    primoAnno.forEach((element) => {
        str += `<div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Nome: ${element.nome} Cognome: ${element.cognome}</h5>
                        <p class="card-text">Anno: ${element.anno}</p>
                    </div>
                </div>`;
    });
  
    document.getElementById("cardsContainer").innerHTML = str;
});

document.querySelectorAll('h3')[1].addEventListener('click', () => {
    let str = '';

    secondoAnno.forEach((element) => {
        str += `<div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Nome: ${element.nome} Cognome: ${element.cognome}</h5>
                        <p class="card-text">Anno: ${element.anno}</p>
                    </div>
                </div>`;
    });
  
    document.getElementById("cardsContainer").innerHTML = str;
});

document.querySelectorAll('h3')[2].addEventListener('click', () => {
    let str = '';

    terzoAnno.forEach((element) => {
        str += `<div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Nome: ${element.nome} Cognome: ${element.cognome}</h5>
                        <p class="card-text">Anno: ${element.anno}</p>
                    </div>
                </div>`;
    });
  
    document.getElementById("cardsContainer").innerHTML = str;
});


document.getElementById('filtroPerAnno').addEventListener('change', (event) => {
    let nomeSelezionato = event.target.value;
    let str = '';
    let alunniFiltrati = alunni.filter((element) => element.nome === nomeSelezionato);
    alunniFiltrati.forEach((element) => {
        str += `<div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Nome: ${element.nome} Cognome: ${element.cognome}</h5>
                    </div>
                </div>`;
    });

    if (alunniFiltrati.length === 0) {
        str = '<p>Nessun alunno trovato con questo nome.</p>';
    }

    document.getElementById("cardsContainer").innerHTML = str;
});