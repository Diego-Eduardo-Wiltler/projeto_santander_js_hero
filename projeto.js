let niveis = {
    Ferro: { min: 1000, max: 1000 },
    Bronze: { min: 1001, max: 2000 },
    Prata: { min: 2001, max: 5000 },
    Ouro: { min: 5001, max: 7000 },
    Platina: { min: 7001, max: 8000 },
    Ascendente: { min: 8001, max: 9000 },
    Imortal: { min: 9001, max: 10000 },
    Radiante: { min: 10001, max: 20001 }

}

class Personagem{
    constructor(nome, xp, classe, raca){
        this.nome = nome,
        this.nivel = xp,
        this.patente = this.getPatente(xp)
        this.classe = classe,
        this.raca = raca
    }
    getPatente(xp){
        for(let patente in niveis){
            if(xp>=niveis[patente].min && xp<=niveis[patente].max){
                return patente
            }
        }
        return "Sem patente";
    }
    get personagemDetalhes(){
        return `Nome: ${this.nome}\nClasse: ${this.classe}\nNível: ${this.nivel}\nPatente: ${this.patente}\nRaça: ${this.raca}`
    }
}

let character = new Personagem("Alberto", 20000, "Guerreiro", "Elfo")
console.log(character.personagemDetalhes)