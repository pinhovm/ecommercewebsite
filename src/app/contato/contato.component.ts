import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato = this.formbuilder.group({
    nome: ["", [
      Validators.minLength(6),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(9),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(40),
      Validators.required
    ]]
  })

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  
  enviarFormulario(){
    alert("Sua mensagem foi enviada");
    this.formContato.reset();
  }

}
