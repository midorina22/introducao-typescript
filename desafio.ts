/*interface employee {
    code: number,
    name: string,
};

const employee1: employee = {
    code: 10,
    name: "John",
};

console.log(employee1)*/


//desafio2

interface pessoa {
    nome: string,
    idade: number,
    profissao: string,
};

let pessoa1: pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: "atriz",
};

let pessoa2: pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: "Padeiro",
};

let pessoa3: pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: "Atriz",
};

let pessoa4: pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: "padeiro"
};

console.log(pessoa2.profissao)

