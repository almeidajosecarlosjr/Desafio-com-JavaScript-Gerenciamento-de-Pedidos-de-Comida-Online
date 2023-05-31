//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

function calcularValorTotal(n, pedidos, cupom) {
    let total = 0;
    for (let i = 0; i < n; i++) {
      //Explicação: Aplica o conceito de destructuring para atribuição do nome e valor.
      //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
      let [nome, valor] = pedidos[i].split(' ');
      valor = parseFloat(valor);
      total += valor;
    }
    
      if (cupom === "10%") {
        total -= total * 0.1; // Aplica desconto de 10%
      }else if (cupom === "20%") {
        total -= total * 0.2; // Aplica desconto de 20%
      }  
      return total.toFixed(2);
  }
  
  //Recupera os valores de entrada, criando um array para os pedidos:
  const n = parseInt(gets());
  const pedidos = [];
  for (let i = 0; i < n; i++) {
    pedidos.push(gets());
  }
  const cupom = gets();
  
  //TODO: Analisar e completar a função "calcularValorTotal",
    const valorTotal = calcularValorTotal(n, pedidos, cupom);
    print(`Valor total: ${valorTotal}`);
