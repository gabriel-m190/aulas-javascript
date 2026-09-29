const prompt = require("prompt-sync")()
let Itens = []
let raridadeItem = ""
//etapa 2//
function DescobrirRaridade(precoItem) {
    if (precoItem >= 1501) {
        return "Mitico"
    } else if (precoItem >= 1001) {
        return "Lendario"
    } else if (precoItem >= 501) {
        return "Epico"
    } else if (precoItem >= 301) {
        return "Raro"
    } else if (precoItem >= 101) {
        return "Incomum"
    } else if (precoItem >= 0) {
        return "Comum"
    }
}
console.log(`=== CATALOGO DE RARIDADES ===
    //Comum 0 - 100//
    //Incomum 101 - 300//
    //Raro 301 - 500//
    //Épico 501 - 1000//
    //lendário 1001 - 1500//
    //Mítico 1501+//`);
console.log('=== RARIDADE DO ITEM DA SUA COMPRA ===')

console.log(raridadeItem)
//etapa3
for (let i = 0; i < 5; i++) {
    let nomeItem = ""
    let precoItem = 0
    let raridadeItem = 'Mítico'
    let quantidadeEstoque = 12
    while (nomeItem == "") {
        nomeItem = prompt(`Insira o nome do ${i + 1}º item: `)
    }
    while (isNaN(precoItem) || precoItem <= 0) {
        precoItem = parseFloat(prompt(`(em robux)Insira o preço do ${i + 1}º item: `))
    }
    raridadeItem = DescobrirRaridade(precoItem)
    //etapa1
    let item = {
        Nome: nomeItem,
        Preco: precoItem,
        Raridade: raridadeItem,
        Estoque: quantidadeEstoque,
        Promocao: (i % 2 == 0),
        Destaque: (precoItem > 500)
    }
    //fim etapa 1
    Itens.push(item)
    console.log("--- Item cadastrado com sucesso ---")
}

console.table(Itens)
//etapa 4
let opcao = -1
while(opcao < 0||opcao>Itens.length){
    opcao = prompt("Escolha um dos itens da tabela para fazer a simulação de venda(0 a 4): ")
}
opcao = Itens[parseFloat(opcao)]
console.log(opcao)
while(opcao.Estoque > 0){
    console.log(`Estoque do item ${opcao.Nome}: ${opcao.Estoque}`)
    opcao.Estoque -= 1
}
console.log(`Estoque do item ${opcao.Nome}: ${opcao.Estoque}`)
//etapa 5
console.log("--- Catalogo itens ---")
console.table(Itens)