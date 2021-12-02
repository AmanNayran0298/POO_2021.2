class Postagem {
    constructor(public id : number,
                public texto : string,
                public quantidadeCurtidas : number){}
                
    curtir() : void{
        this.quantidadeCurtidas++;
    }
    
    toString() : string{
        return (this.texto + this.quantidadeCurtidas);
    }
}

class Microblog {
    postagens : Postagem[] = [];

    incluir(postagem :Postagem) : void {
        this.postagens.push(postagem);
    }

    busca(numero : number) : Postagem {
        let postagemCheck: Postagem;
        for (let postagem of this.postagens) {
            if (postagem.id == numero) {
                postagemCheck = postagem
                break
            }
        }
        return postagemCheck;
    }

    buscaId(numero: number) : number {
        let indice : number = -1;
        for (let i: number = 0; i < this.postagens.length; i++){
            if(this.postagens[i].id == numero){
                indice = i;
                break
            }
        }
        return indice;
    }

    excluir(id : number): void{
        let indice :number = this.buscaId(id);
        if (indice != -1){
            for (let i : number = indice; i < this.postagens.length; i++){
                this.postagens[i] = this.postagens[i+1];
            }
            this.postagens.pop();
        }
    } 
    
    maisCurtidas() : Postagem{
        let maisLikes = this.postagens[0].quantidadeCurtidas;
        let maislikes2 = this.postagens[0];
        for (let i :number = 0; i < this.postagens.length; i++){
            if (this.postagens[i].quantidadeCurtidas > maisLikes){
                maisLikes = this.postagens[i].quantidadeCurtidas
                maislikes2 = this.postagens[i]
            }
        }
        return maislikes2;
    }

    toString2() : string{
        var stringFinal : string = this.postagens[0].texto
        for(let i :number = 1; i < this.postagens.length; i++){
            stringFinal += this.postagens[i].texto 
        }return stringFinal
    }

    curtir(id : number){
        let postagemConsul = this.busca(id);

        if(postagemConsul != null) {
            postagemConsul.curtir();
        }
    }
}

let microblog: Microblog = new Microblog();

microblog.incluir(new Postagem(1, "Hello ", 0))
microblog.incluir(new Postagem(2, "World!", 0))

console.log(microblog.busca(1))
console.log(microblog.toString2())

microblog.curtir(1)

console.log(microblog.maisCurtidas())

let p1 = new Postagem(1,"Hello World! ", 1);

p1.curtir();
console.log(p1.toString());