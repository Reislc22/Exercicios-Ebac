const form = document.getElementById('form-valor');
const valorA = document.getElementById('valorA')
const valorB = document.getElementById('valorB')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const mensagemSucesso = `Certo o numero ${valorA.value} é menor que o numero ${valorB.value}`
    

    if (valorA.value < valorB.value){
    const conteinerMensagemSucesso = document.querySelector('.sucess-message')
    conteinerMensagemSucesso.innerHTML = mensagemSucesso;
    conteinerMensagemSucesso.style.display = 'block';
    
    valorA.value = "";
    valorB.value = "";
    } else {
        alert('O valor A prescisa ser menor que o valor B');
    }
})