const livro = {
  titulo: "Dom Quixote",
  autor: "Miguel de Cervantes",
  ano: 1605,
  resumo: function() {
    return `${this.titulo} foi escrito por ${this.autor} em ${this.ano}.`;
  }
};

console.log(livro.resumo());