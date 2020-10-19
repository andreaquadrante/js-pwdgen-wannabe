var nomeUtente = prompt('Qual è il tuo nome?');
var cognomeUtente = prompt('Qual è il tuo cognome?')
var colorePreferitoUtente = prompt('Qual è il tuo colore preferito?')

alert('Ottimo ' + nomeUtente + ', grazie! Ho generato per te una nuova "insicurissima" password!')

document.getElementById('messaggio').innerHTML = 'La tua nuova <strong>"insicurissima"</strong> nuova password:'
document.getElementById('password').innerHTML = nomeUtente + cognomeUtente + colorePreferitoUtente + '19'
