// Definição da classe Livro
class Livro {
    // Construtor da classe para inicializar as propriedades
    constructor(titulo, autor, numPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }

    // Método para exibir todas as informações do livro
    exibirInformacoes() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Número de Páginas: ${this.numPaginas}`);
    }
}

// Criando objetos livro utilizando a classe Livro
let livro1 = new Livro("A Origem das Espécies", "Charles Darwin", 352);
let livro2 = new Livro("1984", "George Orwell", 328);

// Exibindo informações dos livros
console.log("Informações do Livro 1:");
livro1.exibirInformacoes();

console.log("\nInformações do Livro 2:");
livro2.exibirInformacoes();
