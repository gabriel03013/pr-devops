import {getAllExs} from './script.js';

document.addEventListener("DOMContentLoaded", () => {

    const table = document.getElementById("exTable");

    const exs = getAllExs();
    console.log(exs)

    exs?.forEach( (ex) => {
        const newRow = table.insertRow();
        const nomeCell = newRow.insertCell(0)
        const idadeCell = newRow.insertCell(1)
        const telefoneCell = newRow.insertCell(2)
        const caracteristicaMaisBonitaCell = newRow.insertCell(3)
        const paixaoRestanteCell = newRow.insertCell(4)
        const dtInicioCell = newRow.insertCell(5)
        const dtFimCell = newRow.insertCell(6)

        nomeCell.textContent = ex.nome;
        idadeCell.textContent = ex.idade.toString();
        telefoneCell.textContent = ex.telefone;
        caracteristicaMaisBonitaCell.textContent = ex.caracteristicaMaisBonita;
        paixaoRestanteCell.textContent = `${ex.paixaoRestante.toString()}%`;
        dtInicioCell.textContent = new Date(ex.dtInicio).toLocaleDateString();
        dtFimCell.textContent = new Date(ex.dtFim).toLocaleDateString();
    })


})