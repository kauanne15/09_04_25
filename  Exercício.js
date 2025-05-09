const pessoa = {
    nome: "Antonella",
    idade: 26,
    curso: "design grafico",
    disciplinas: ["história do design", "tipografia", "identidade visual"]
  };
  for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
  }



  