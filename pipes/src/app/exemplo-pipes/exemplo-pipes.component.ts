import { Component } from '@angular/core';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.scss']
})
export class ExemploPipesComponent {

  forca: number = 1;
  expoent: number = 1;

  livros: string[] = ['Java', 'Angular'];
  filtro:string =''

  livro: any = {
    titulo: 'Dungeons & Dragons - Player\'s Handbook - Livro Do Jogador Edição',
    dataPublicacao: new Date(2019,9,1),
    valor : 279.09
  }

  valorAsync: Promise<string>;

  valorAsync2 = new Observable((sub) => {
    setInterval(() => sub.next('Obtendo valor async 2'),2000)
  })

  constructor(){
    this.valorAsync = this.obterAsync();
  }

  obterAsync(): Promise<string> {
    return new Promise(
    (resolve, reject) => {
      setInterval(() => resolve('Obtendo Valor Async'), 2000 );
      }
   );
  }

  salvarLivro(livro: string): void{
    this.livros.push(livro);
  }

  obterLivros(){
    if(this.livros.length === 0 || this.filtro === undefined
        || this.filtro === ''){
      return this.livros;
    }

    return this.livros.filter(
      v => v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) != -1
    );
  }

}
