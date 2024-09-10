//arrays, objetos

let metas = ["Alexandre", "Olá"]

console.log(metas[1] + " " + metas[0]);

let meta = {
    value: 'Ler um livro por mês',
    cor: 'azul',
    checked: true,
    log: (info) => {

        console.log(info)

    } // aqui agora o que antes era uma função.. vira um método, por estar dentro do objeto.
        
}

meta.value = 'Não é mais um livro e sim uma azeitona'
meta.log(meta.value)


//function | arrow function

const criarMeta = () => {} // isso é uma função. mas se for utilizada dentro do meu objeto "meta" ele vira um método. Veja no objeto acima:

