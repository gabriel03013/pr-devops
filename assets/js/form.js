import {addEx} from "./script.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("entrou")

        const formData = new FormData(form);
        let newEx = {
            nome: formData.get("nome"),
            idade: formData.get("idade") ? Number(formData.get("idade")) : 0,
            telefone: formData.get("telefone"),
            caracteristicaMaisBonita: formData.get("crc-mais-bonita"),
            paixaoRestante: formData.get("paixao-restante") ? Number(formData.get("paixao-restante")) : 0,
            dtInicio: formData.get("data-inicio") ? new Date(formData.get("data-inicio")) : new Date(),
            dtFim: formData.get("data-termino") ? new Date(formData.get("data-termino")) : new Date(),
        }
        addEx(newEx);
        alert("Sua ex foi adicionada com sucesso!");
        location.reload()
    })
})