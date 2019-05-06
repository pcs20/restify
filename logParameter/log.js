class LogParameter {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setIdade(idade) {
        this.idade = idade;
    }

    getIdade() {
        return this.idade;
    }

    getNome() {
        return this.nome;
    }
}

module.exports = LogParameter;