import Fornecedor from "./fornecedor"; 

class FornecedorPessoa extends Fornecedor {
    constructor(nome = 'Sem Nome', fone = "(00) 00000-0000", rg = "", cpf = "") {
        super(nome, fone)
        this.rg = rg
        this. cpf = cpf
    }

    setRG(rg) {
        this.rg = rg
    }
    setCPF(cpf) {
        this.cpf = cpf
    }

    getRG(){
        return this.rg
    }
    getCPF(){
        return this.cpf
    }
}
