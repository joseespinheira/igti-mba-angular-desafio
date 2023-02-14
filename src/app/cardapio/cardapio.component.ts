import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { pedidoService } from '../pedido.service';
import { Produto } from '../produto.interface';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(router: Router, title: Title, private httpService: HttpClient, public ps: pedidoService) {
    title.setTitle("Cardapio");
  }
  ngOnInit(): void {
    this.httpService.get<Produto[]>('http://localhost:3000/cardapio').subscribe(dados => {
      this.produtos = dados;
    })
  }

}
