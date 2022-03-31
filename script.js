/*capturar campos de entrada de valores*/

const campoEntradaOrcamento = document.querySelector('.formularioEntradaOrcamento input');

const buttonOrcamento = document.querySelector('.formularioEntradaOrcamento button');

const campoNomeDespesa = document.querySelector('.formularioEntradaDespesa__nome');

const campoValorDespesa = document.querySelector('.formularioEntradaDespesa__valor');

const buttonDespesa = document.querySelector('.formularioEntradaDespesa button');

/*capturar valores*/

buttonOrcamento.addEventListener('click', capturarValorOrcamento);
buttonDespesa.addEventListener('click', capturarValorDespesa);

/*armazenar valores*/

const controleGastos = {
    orcamento: 0,
    despesas: 0,
    saldo: 0
};


/*Funcões dos calculos*/

function capturarValorOrcamento() {
    const valorOrcamento = Number(campoEntradaOrcamento.value);
    controleGastos.orcamento = valorOrcamento;
    controleGastos.saldo = valorOrcamento;
    atualizarInterface();
}

function capturarValorDespesa() {
    const nomeDespesa = campoNomeDespesa.value;
    const valorDespesa = Number(campoValorDespesa.value);

    controleGastos.despesas += valorDespesa;
    controleGastos.saldo -= valorDespesa;
    atualizarInterface();
    adcionarDespesaInterface(nomeDespesa, valorDespesa);
}

/*Atualização da interface*/

const orcamento = document.querySelector('.secaoImpressaoResultados__orcamento p');
const despesa = document.querySelector('.secaoImpressaoResultados__despesas p');
const saldo = document.querySelector('.secaoImpressaoResultados__saldo p');

function atualizarInterface() {
    orcamento.innerText = `+ R$ ${controleGastos.orcamento}`;
    despesa.innerText = `- R$ ${controleGastos.despesas}`;
    saldo.innerText = `R$ ${controleGastos.saldo}`;
}

/*Criar elementos da interface*/

const listaDespesa = document.querySelector('.containerDespesas__lista');

function adcionarDespesaInterface(nomeDespesa, valorDespesa) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');

    h3.innerText = nomeDespesa;
    p.innerText = `R$ ${valorDespesa}`;
    img.src = 'trash.svg';
    img.alt = 'Icone lixeira';

    img.addEventListener('click', removerDespesa);

    li.dataset.valor = valorDespesa;
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(img);

    listaDespesa.appendChild(li);
}

/*Remoção das despesas*/

function removerDespesa(evento){
    const  despesaClicada = evento.target.parentNode;
    const  valorDespesaClicada = Number(despesaClicada.dataset.valor);

    controleGastos.despesas -= valorDespesaClicada;
    controleGastos.saldo += valorDespesaClicada;

    atualizarInterface();
    despesaClicada.remove();
    
}
