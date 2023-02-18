import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Livro 1',
      resumo: 'Resumo do Livro 1',
      autores: ['Autor 1', 'Autor 2']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Livro 2',
      resumo: 'Resumo do Livro 2',
      autores: ['Autor 3', 'Autor 4']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Livro 3',
      resumo: 'Resumo do Livro 3',
      autores: ['Autor 5']
    }
  ];

  constructor() { }
}
