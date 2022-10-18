import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }
  

  calcularTotal(){
    this.total = Math.round(this.itensCarrinho.reduce((prev, curr)=> prev + (curr.preco * curr.quantidade),0)*100)/100
  }

  removeDoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item=> item.id !== produtoId);
    this.carrinhoService.removerDoCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar(){
    alert("Compra efetuada com sucesso!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
}
