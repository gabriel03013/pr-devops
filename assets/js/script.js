// interface Ex {
//     nome: string;
//     idade: number;
//     telefone: string;
//     caracteristicaMaisBonita: string;
//     paixaoRestante: number;
//     dtInicio: Date;
//     dtFim: Date;
// }

export function getAllExs() {
    const exStorage = localStorage.getItem("exs");
    if (!exStorage) return null;
    return JSON.parse(exStorage);
}

export function addEx(ex){
    const exs = getAllExs() || [];
    exs.push(ex);
    localStorage.setItem("exs", JSON.stringify(exs));
}

