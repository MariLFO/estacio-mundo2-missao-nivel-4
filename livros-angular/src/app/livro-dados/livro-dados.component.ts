import { Component } from '@angular/core';
import {Livro} from "../livro";
import {Editora} from "../editora";

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent {
  public livro: Livro;
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor() {
    this.livro = new Livro();
  }
}
