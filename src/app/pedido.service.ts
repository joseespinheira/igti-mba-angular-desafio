import { Produto } from "./produto.interface";
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: "root"
})
export class pedidoService {

    pedidos: Produto[] = [];
    add(produto: Produto): void {
        const pedido = this.pedidos.find(item => item.descricao === produto.descricao)
        if (pedido) {
            pedido.quantidade++;
        } else {
            produto.quantidade = 1;
            this.pedidos.push(produto);
        }
    }

    public get valorTotal(): number {
        return this.pedidos.reduce((acc, cur) => acc = cur.preco * cur.quantidade + acc, 0);
    }
    public limpar(): void {
        this.pedidos = [];
    }
}