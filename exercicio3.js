const livroOriginal = {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    ano: 1605
  };
  
  const novoLivro = {
    ...livroOriginal,
    titulo: "O Senhor dos Anéis"
  };
  
  console.log(novoLivro);