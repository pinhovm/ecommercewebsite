import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  descricao="";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pesquisar(){
    if(this.descricao){
      this.router.navigate(["produtos"], {queryParams:{descricao: this.descricao}})
      return;
    }
    this.router.navigate(["produtos"]);
  }
}
