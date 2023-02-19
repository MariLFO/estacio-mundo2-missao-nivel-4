import { Component } from '@angular/core';
import { Livro } from "../livro";
import { Editora } from "../editora";
import { ControleEditoraService } from "../controle-editora.service";
import { ControleLivrosService } from "../controle-livros.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent {
  public livro: Livro;
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router) {
    this.livro = new Livro();
  }
}
